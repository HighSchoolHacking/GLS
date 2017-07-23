import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to ./file/system/lower/case.
 */
export class FileSystemLowerCaseConverter extends CaseStyleConverter {
    /**
     * Combines a series of words to ./file/system/case.
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
}
