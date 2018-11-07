import { ICaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to "lowercase".
 */
export class LowerCaseConverter implements ICaseStyleConverter {
    /**
     * Combines a series of words to the equivalent case style.
     *
     * @param words   Words to convert.
     * @returns The word's equivalent in this converter's case style.
     */
    public convert(words: string[]): string {
        let result = "";

        for (const word of words) {
            result += word.toLowerCase();
        }

        return result;
    }
}
