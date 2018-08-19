import { ICaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to Dash-Upper-Case.
 */
export class DashUpperCaseConverter implements ICaseStyleConverter {
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
            const word = words[i];

            result += this.transformWord(word.toLowerCase()) + "-";
        }

        result += this.transformWord(words[words.length - 1].toLowerCase());
        return result;
    }

    /**
     * Applies this style's transformation to a word.
     *
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
    private transformWord(word: string): string {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}
