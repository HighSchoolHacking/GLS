/**
 * Transforms words for a particular case.
 */
export interface IWordTransformer {
    /**
     * Applies post-conversion processing to a merged name.
     *
     * @param converted   Merged name of joined transformed words.
     * @returns Postprocessed equivalent of the name.
     */
    finalize(converted: string): string;

    /**
     * @returns Filler between words in a conversion.
     */
    getBetweenWords(): string;

    /**
     * Applies this style's transformation to a word.
     *
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
    transformWord(word: string): string;
}
