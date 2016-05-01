/// <reference path="ClassMemberVariableProperties.ts" />

namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's class member variables.
     */
    export class ClassMemberProperties {
        /**
         * Metadata on class member variables.
         */
        public variables: ClassMemberVariableProperties = new ClassMemberVariableProperties();
    }
}
