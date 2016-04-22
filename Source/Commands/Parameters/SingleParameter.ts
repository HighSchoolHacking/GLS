/// <reference path="Parameter.ts" />
/// <reference path="RepeatingParameters.ts" />

namespace GLS.Commands.Parameters {
    "use strict";

    /**
     * A single named parameter.
     */
    export class SingleParameter extends Parameter {
        /**
         * The name of this parameter.
         */
        public name: string;

        /**
         * Whether this must be provided.
         */
        public required: boolean;

        /**
         * Initializes a new instance of the Parameter class.
         * 
         * @param descriptor   A plain-text description of the parameter.
         * @param parameters   Parameters contained inside.
         */
        constructor(name: string, description: string, required: boolean) {
            super(description);

            this.name = name;
            this.required = required;
        }
    }
}
