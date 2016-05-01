/// <reference path="CaseStyleConverter.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Converts a name to camelCase.
     */
    export class CamelCaseConverter extends CaseStyleConverter {
        /**
         * 
         */
        public applyTransformationToWord(name: string, start: number, nextWordStart: number) {
            return name.substring(0, start) + name[start].toLowerCase() + name.substring(start + 1);
        }
    }
}
