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
     * Transforms series of words to "Package.Upper.Case".
     * 
     * @param word   A word within a name.
     * @returns The words transformed to "Package.Upper.Case".
     */
    protected transformWord(word: string): string {
        return word[0].toUpperCase() + word.substring(1);
    }
}
