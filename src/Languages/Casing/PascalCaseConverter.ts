import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to PascalCase.
 */
export class PascalCaseConverter extends CaseStyleConverter {
    /**
     * Transforms a word within a name to PascalCase.
     * 
     * @param word   A word within a name.
     * @returns The word transformed to PascalCase.
     */
    public transformWord(word: string) {
        return word[0].toUpperCase() + word.substring(1);
    }
}
