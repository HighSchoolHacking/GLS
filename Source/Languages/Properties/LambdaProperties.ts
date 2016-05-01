namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's lambdas.
     */
    export class LambdaProperties {
        /**
         * How to start a lambda.
         */
        functionLeft: string;

        /**
         * A string between the lambda arguments and body.
         */
        functionMiddle: string;

        /**
         * How to end a lambda.
         */
        functionRight: string;

        /**
         * Whether parameter types must be included in the argument list.
         */
        parameterTypeRequired: boolean;
        
        /**
         * Whether a return type must be included in the argument list.
         */
        returnTypeRequired: boolean;
    }
}
