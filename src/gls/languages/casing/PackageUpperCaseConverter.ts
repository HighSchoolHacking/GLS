import { CaseStyleConverter } from "./CaseStyleConverter";

    /**
     * Converts a name to "Package.Upper.Case".
     */
    export class PackageUpperCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to "Package.Upper.Case".
         * 
         * @param name   A name to convert.
         * @returns The name's equivalent in "Package.Upper.Case".
         */
        public convert(name: string): string {
            name = super.convert(name);

            return name.substring(1);
        }

        /**
         * Transforms a word within a name to "Package.Upper.Case".
         * 
         * @param word   A word within a name.
         * @returns The word transformed to "Package.Upper.Case".
         */
        protected applyTransformationToWord(word: string): string {
            return "." + word[0].toUpperCase() + word.substring(1).toLowerCase();
        }
    }
