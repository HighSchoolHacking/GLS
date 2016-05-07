/// <reference path="CaseStyleConverter.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Converts a name to "package.lower.case".
     */
    export class PackageLowerCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to "package.lower.case".
         * 
         * @param name   A name to convert.
         * @returns The name's equivalent in "package.lower.case".
         */
        public convert(name: string): string {
            name = super.convert(name);

            return name.substring(1);
        }

        /**
         * Transforms a word within a name to "package.lower.case".
         * 
         * @param word   A word within a name.
         * @returns The word transformed to "package.lower.case".
         */
        protected applyTransformationToWord(word: string): string {
            return "." + word.toLowerCase();
        }
    }
}
