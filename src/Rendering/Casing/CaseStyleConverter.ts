import { IWordTransformer } from "./WordTransformer";

/**
 * Converts series of words to a case.
 */
export class CaseStyleConverter {
    /**
     * Transforms words for the case.
     */
    private wordTransformer: IWordTransformer;

    /**
     * Initializes a new instance of the CaseStyleConverter class.
     *
     * @param wordTransformer   Transforms words for the case.
     */
    public constructor(wordTransformer: IWordTransformer) {
        this.wordTransformer = wordTransformer;
    }

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

        for (let i = 0; i < words.length - 1; i += 1) {
            const word = words[i];

            result += this.wordTransformer.transformWord(word);
            result += this.wordTransformer.getBetweenWords();
        }

        result += this.wordTransformer.transformWord(words[words.length - 1]);

        return this.wordTransformer.finalize(result);
    }
}
