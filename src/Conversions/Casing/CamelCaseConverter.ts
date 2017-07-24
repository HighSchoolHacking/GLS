import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to camelCase.
 */
export class CamelCaseConverter extends CaseStyleConverter {
    /**
     * Combines a series of words to the equivalent case style.
     * 
     * @param word   Words to convert.
     * @returns The word's equivalent in this converter's case style.
     */
    public convert(words: string[]): string {
        let name: string = super.convert(words);

        return name[0].toLowerCase() + name.substring(1);
    }

    /**
     * Applies this style's transformation to a word.
     * 
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
    protected transformWord(word: string): string {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
}
