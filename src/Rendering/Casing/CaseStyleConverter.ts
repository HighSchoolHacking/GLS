/**
 * Converts series of words to a case.
 */
export interface ICaseStyleConverter {
    /**
     * Combines a series of words to the equivalent case style.
     *
     * @param words   Words to convert.
     * @returns The word's equivalent in this converter's case style.
     */
    convert(words: string[]): string;
}
