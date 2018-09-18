/**
 * Crawls text for relevant characters during parsing.
 */
export class TextParsing {
    /**
     * Characters not considered to be part of command names.
     */
    private static nonCommandNameCharacters = new Set(["}", ":"]);

    /**
     * Characters not considered to be pure text parts of words.
     */
    private static nonWordCharacters = new Set([" ", "{", "(", "}", ":"]);

    /**
     * Gets the next index of a non-space character in the text.
     *
     * @param text   Text to search through.
     * @param start   Starting index in the text.
     * @returns Index of the next non-space character in the text.
     */
    public static getNextNonSpaceIndex(text: string, start: number): number {
        while (start < text.length) {
            if (text[start] !== " ") {
                return start;
            }

            start += 1;
        }

        return text.length;
    }

    /**
     * Gets the next starting index of a word in the text.
     *
     * @param text   Text to search through.
     * @param start   Starting index in the text.
     * @returns Index of the next starting word in the text.
     */
    public static getNextStartOfWordIndex(text: string, start: number): number {
        while (start < text.length) {
            if (!TextParsing.nonWordCharacters.has(text[start])) {
                return start;
            }

            start += 1;
        }

        return -1;
    }

    /**
     * Gets the next ending index of a command name in the text.
     *
     * @param text   Text to search through.
     * @param start   Starting index in the text.
     * @returns Index of the next end of a command name in the text.
     */
    public static getNextEndOfCommandNameIndex(text: string, start: number): number {
        while (start < text.length) {
            if (TextParsing.nonCommandNameCharacters.has(text[start])) {
                return start;
            }

            start += 1;
        }

        return text.length;
    }

    /**
     * Gets the next ending index of a command name in the text.
     *
     * @param text   Text to search through.
     * @param i   Starting index in the text.
     * @returns Index of the next end of a command name in the text.
     */
    public static getNextEndOfWordIndex(text: string, i: number): number {
        while (i < text.length) {
            if (TextParsing.nonWordCharacters.has(text[i])) {
                return i;
            }

            i += 1;
        }

        return text.length;
    }

    /**
     * Gets the next ending index of a parenthesized word in the text.
     *
     * @param text   Text to search through.
     * @param start   Starting index in the text.
     * @returns Index of the next end of a parenthesized word in the text.
     */
    public static getNextEndOfParenthesisWordIndex(text: string, start: number): number {
        while (start < text.length) {
            if (text[start] === "\\") {
                start += 3;
                continue;
            }

            if (text[start] === ")") {
                return start;
            }

            start += 1;
        }

        return start;
    }

    /**
     * Removes back-slashes from a word, excluding an end parenthesis.
     *
     * @param word   Parenthesized word that may include backslashes.
     * @returns Equivalent of the word without backslashes.
     */
    public static removeBackslashesFromWord(word: string): string {
        let result = "";

        for (let i = 0; i < word.length; i += 1) {
            if (word[i] === "\\" && i < word.length - 1 && word[i + 1] === ")") {
                i += 1;
            }

            result += word[i];
        }

        return result;
    }
}
