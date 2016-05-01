/// <reference path="CaseStyleConverter.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Converts a name to camelCase.
     */
    export class CamelCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to camelCase.
         * 
         * @param name   A name to convert.
         * @returns The name's equivalent in camelCase.
         */
        public convert(name: string): string {
            name = super.convert(name);

            return name[0].toLowerCase() + name.substring(1);
        }

        /**
         * Transforms a word within a name to camelCase.
         * 
         * @param word   A word within a name.
         * @returns The word transformed to camelCase.
         */
        protected applyTransformationToWord(word: string): string {
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        }
    }
}
