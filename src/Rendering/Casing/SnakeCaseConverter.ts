import { ICaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to snake_case.
 */
export class SnakeCaseConverter implements ICaseStyleConverter {
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
            result += words[i].toLowerCase() + "_";
        }

        result += words[words.length - 1].toLowerCase();
        return result;
    }
}
