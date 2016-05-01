/// <reference path="CaseStyleConverter.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Converts a name to snake_case.
     */
    export class SnakeCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to snake_case.
         * 
         * @param name   A name to convert.
         * @returns The name's equivalent in snake_case.
         */
        public convert(name: string): string {
            name = super.convert(name);

            return name.substring(0, name.length - 1);
        }

        /**
         * Transforms a word within a name to snake_case.
         * 
         * @param word   A word within a name.
         * @returns The word transformed to snake_case.
         */
        protected applyTransformationToWord(word: string): string {
            return word.toLowerCase() + "_";
        }
    }
}
