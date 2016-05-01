/// <reference path="CaseStyleConverter.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Does nothing to a name.
     */
    export class NoneConverter extends CaseStyleConverter {
        /**
         * @param name   A name.
         * @returns The original name with no changes.
         */
        public convert(name: string): string {
            return name;
        }
    }
}
