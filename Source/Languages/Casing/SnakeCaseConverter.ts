/// <reference path="CaseStyleConverter.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Converts a name to snake_case.
     */
    export class SnakeCaseConverter extends CaseStyleConverter {
        /**
         * 
         */
        public applyTransformationToWord(name: string, start: number, nextWordStart: number) {
            let before: string = name.substring(0, start),
                word: string = name[start].toLowerCase() + name.substring(start, nextWordStart),
                after = name.substring(nextWordStart);

            return before + word + "_" + after;
        }
    }
}
