/// <reference path="CaseStyleConverter.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Converts a name to "file/system/case".
     */
    export class FileSystemCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to "file/system/case".
         * 
         * @param name   A name to convert.
         * @returns The name's equivalent in "file/system/case".
         */
        public convert(name: string): string {
            name = super.convert(name);

            return name.substring(1);
        }

        /**
         * Transforms a word within a name to "file/system/case".
         * 
         * @param word   A word within a name.
         * @returns The word transformed to "file/system/case".
         */
        protected applyTransformationToWord(word: string): string {
            return "/" + word.toLowerCase();
        }
    }
}
