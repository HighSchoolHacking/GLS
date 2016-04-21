/// <reference path="Parameter.ts" />

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
         * Initializes a new instance of the SingleParameter class.
         * 
         * @param name   The name of this parameter.
         * @param description   A plain-text description of the parameter.
         * @param required   Whether this is required.
         */
        constructor(name: string, description: string, required: boolean) {
            super(description);

            this.name = name;
            this.required = required;
        }
    }
}
