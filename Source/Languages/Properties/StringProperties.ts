/// <reference path="NativeCallProperties.ts" />

namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's Strings.
     */
    export class StringProperties {
        /**
         * The name of the string class.
         */
        public className: string;

        /**
         * The name of the concatenation operator.
         */
        public concatenate: string;

        /**
         * How to determine the index of a substring.
         */
        public index: NativeCallProperties;

        /**
         * How to retrieve a string's length.
         */
        public length: NativeCallProperties;
    }
}
