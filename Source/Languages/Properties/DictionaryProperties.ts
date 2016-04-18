/// <reference path="NativeCallProperties.ts" />

namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's dictionaries.
     */
    export class DictionaryProperties {
        /**
         * How to determine if a key exists in a dictionary.
         */
        public containsKey: NativeCallProperties;
        
        /**
         * The name of the dictionary class.
         */
        public className: string;

        /**
         * Whether dictionaries are initialized as class instances using "new".
         */
        public initializeAsNew: boolean;

        /**
         * How to end initializing a new dictionary's values.
         */
        public initializeEnd: string;

        /**
         * How to end a new dictionary's in-place value.
         */
        public initializePairComma: string;

        /**
         * How to start an in-place pair initialization.
         */
        public initializePairLeft: string;

        /**
         * Characters in the middle of an in-place pair initialization.
         */
        public initializePairMiddle: string;

        /**
         * How to end an in-place pair initialization.
         */
        public initializePairRight: string;

        /**
         * How to start initializing a new dictionary's values.
         */
        public initializeStart: string;

        /**
         * How to start displaying types in a dictionary type.
         */
        public typeLeft: string;

        /**
         * Characters in the middle of types in a dictionary type.
         */
        public typeMiddle: string;

        /**
         * How to end displaying types in a dictionary type.
         */
        public typeRight: string;
    }
}
