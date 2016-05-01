/// <reference path="CaseStyleConverter.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Converts a name to PascalCase.
     */
    export class PascalCaseConverter extends CaseStyleConverter {
        /**
         * 
         */
        public applyTransformationToWord(name: string, start: number, nextWordStart: number) {
            return name.substring(0, start) + name[start].toUpperCase() + name.substring(start + 1);
        }
    }
}
