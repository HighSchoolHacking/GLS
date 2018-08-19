import { IWordTransformer } from "./WordTransformer";

/**
 * Converts a series of words to .python.import.case.
 */
export class PythonImportCaseTransformer implements IWordTransformer {
    /**
     * @returns Filler between words in a conversion.
     */
    public getBetweenWords(): string {
        return "";
    }

    /**
     * Applies no post-conversion processing to a merged name.
     *
     * @param converted   Merged name of joined transformed words.
     * @returns Postprocessed equivalent of the name.
     */
    public finalize(converted: string): string {
        return converted.substring(0, converted.length - 1);
    }

    /**
     * Applies this style's transformation to a word.
     *
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
    public transformWord(word: string): string {
        if (word === "..") {
            word = ".";
        } else {
            word = word.toLowerCase() + ".";
        }

        return word;
    }
}
