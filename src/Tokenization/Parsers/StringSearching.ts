export class StringSearching {
    private static nonCommandNameCharacters = new Set([
        "}", ":",
    ]);

    private static nonWordCharacters = new Set([
        " ", "{", "(", ")", "}", ":",
    ]);

    public static getNextNonSpaceIndex(text: string, i: number): number {
        while (i < text.length) {
            if (text[i] !== " ") {
                return i;
            }

            i += 1;
        }

        return text.length;
    }

    public static getNextStartOfWordIndex(text: string, i: number): number {
        while (i < text.length) {
            if (!StringSearching.nonWordCharacters.has(text[i])) {
                return i;
            }

            i += 1;
        }

        return -1;
    }

    public static getNextEndOfCommandNameIndex(text: string, i: number): number {
        while (i < text.length) {
            if (StringSearching.nonCommandNameCharacters.has(text[i])) {
                return i;
            }

            i += 1;
        }

        return text.length;
    }

    public static getNextEndOfWordIndex(text: string, i: number): number {
        while (i < text.length) {
            if (StringSearching.nonWordCharacters.has(text[i])) {
                return i;
            }

            i += 1;
        }

        return text.length;
    }

    public static getNextEndOfParenthesisWordIndex(text: string, i: number): number {
        while (i < text.length) {
            if (text[i] === "\\") {
                i += 3;
                continue;
            }

            if (text[i] === ")") {
                return i;
            }

            i += 1;
        }

        return i;
    }

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
