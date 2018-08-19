import { ICaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to .python.import.case.
 */
export class PythonImportCaseConverter implements ICaseStyleConverter {
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

        for (let i = 0; i < words.length; i += 1) {
            result += this.transformWord(words[i]);

            if (words[i] !== ".." && i !== words.length - 1) {
                result += ".";
            }
        }

        return result;
    }

    /**
     * Applies this style's transformation to a word.
     *
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
    public transformWord(word: string): string {
        return word === ".."
            ? "."
            : word.toLowerCase();
    }
}
