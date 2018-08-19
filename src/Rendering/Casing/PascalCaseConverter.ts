import { ICaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to PascalCase.
 */
export class PascalCaseConverter implements ICaseStyleConverter {
    /**
     * Combines a series of words to the equivalent case style.
     *
     * @param words   Words to convert.
     * @returns The word's equivalent in this converter's case style.
     */
    public convert(words: string[]): string {
        if (words.length === 0) {
            return "";
        }

        let result = "";

        for (let i = 0; i < words.length - 1; i += 1) {
            result += this.transformWord(words[i]);
        }

        result += this.transformWord(words[words.length - 1]);
        return result;
    }

    /**
     * Applies this style's transformation to a word.
     *
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
    public transformWord(word: string): string {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}
