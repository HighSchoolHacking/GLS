import { ICaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to camelCase.
 */
export class CamelCaseConverter implements ICaseStyleConverter {
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

        for (const word of words) {
            result += this.toCamelCase(word);
        }

        return result[0].toLowerCase() + result.substring(1);
    }

    /**
     * Applies this style's transformation to a word.
     *
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
    public toCamelCase(word: string): string {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}
