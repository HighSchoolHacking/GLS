import { PackageLowerCaseConverter } from "./PackageLowerCaseConverter";

/**
 * Converts a series of words to .python.import.case.
 */
export class PythonImportCaseConverter extends PackageLowerCaseConverter {
    /**
     * Applies this style's transformation to a word.
     *
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
     public convert(words: string[]): string {
         if (words.length === 0) {
             return "";
         }

         let result = "";

         for (let i = 0; i < words.length; ++i) {
             const word = words[i];

             result += this.transformWord(word);

             if (word !== ".." && i !== words.length - 1) {
                result += this.getBetweenWords();
             }
         }
         return result;
     }

    /**
     * Applies this style's transformation to a word.
     *
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
     protected transformWord(word: string): string {
         return word === ".." ? "." : word.toLowerCase();
     }
}
