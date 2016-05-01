namespace GLS.Languages.Casing {
    "use strict";

    /**
     * Allowed casing preferences.
     */
    export enum CaseStyle {
        /**
         * No preference on casing.
         */
        None,

        /**
         * Pascal case, such as MyVariable.
         */
        PascalCase,

        /**
         * Camel case, such as myVariable.
         */
        CamelCase,

        /**
         * Snake case, such as my_variable.
         */
        SnakeCase
    }
}
