/// <reference path="CaseStyle.ts" />

namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's class member variables.
     */
    export class ClassMemberVariableProperties {
        /**
         * Prefix for public members.
         */
        public: string;

        /**
         * Casing modifier for public member variables.
         */
        publicCase: CaseStyle;

        /**
         * Prefix for protected members.
         */
        protected: string;

        /**
         * Casing modifier for protected member variables.
         */
        protectedCase: CaseStyle;

        /**
         * Prefix for private members.
         */
        private: string;

        /**
         * Casing modifier for private member variables.
         */
        privateCase: CaseStyle;

        /**
         * Whether member variables shouldn't be declared.
         */
        skipMemberVariables: boolean;
    }
}
