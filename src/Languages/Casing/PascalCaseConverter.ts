import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to PascalCase.
 */
export class PascalCaseConverter extends CaseStyleConverter {
    /**
     * Applies this style's transformation to a word.
     * 
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
    protected transformWord(word: string): string {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}
