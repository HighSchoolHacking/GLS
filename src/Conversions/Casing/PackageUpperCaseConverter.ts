import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Combines a series of words to "Package.Upper.Case".
 */
export class PackageUpperCaseConverter extends CaseStyleConverter {
    /**
     * @returns Filler between words in a conversion.
     */
    protected getBetweenWords(): string {
        return ".";
    }

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
