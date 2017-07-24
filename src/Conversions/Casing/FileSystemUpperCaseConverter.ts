import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to ./File/System/Upper/Case.
 */
export class FileSystemUpperCaseConverter extends CaseStyleConverter {
    /**
     * Combines a series of words to ./File/System/Upper/Case.
     * 
     * @param word   Words to convert.
     * @returns The word's equivalent in this converter's case style.
     */
    public convert(words: string[]): string {
        return "./" + super.convert(words);
    }

    /**
     * @returns Filler between words in a conversion.
     */
    protected getBetweenWords(): string {
        return "/";
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
