/// <reference path="Parameter.ts" />
/// <reference path="SingleParameter.ts" />

namespace GLS.Commands.Parameters {
    "use strict";

    /**
     * Some number of grouped parameters.
     */
    export class MultipleParameters extends Parameter {
        /**
         * Whether this must be provided.
         */
        public required: boolean;

        /**
         * Parameters contained inside.
         */
        public parameters: Parameter[];

        /**
         * Initializes a new instance of the MultipleParameter class.
         * 
         * @param descriptor   A plain-text description of the parameter.
         * @param parameters   Parameters contained inside.
         */
        constructor(description: string, required: boolean, parameters: Parameter[]) {
            super(description);

            this.required = required;
            this.parameters = parameters;
        }
    }
}
