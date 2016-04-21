/// <reference path="Parameter.ts" />

namespace GLS.Commands.Parameters {
    "use strict";

    /**
     * Some number of repeating parameters.
     */
    export class RepeatingParameters extends Parameter {
        /**
         * Parameters contained inside.
         */
        public parameters: Parameter[];

        /**
         * Initializes a new instance of the RepeatingParameter class.
         * 
         * @param descriptor   A plain-text description of the parameters.
         * @param parameters   Parameters contained inside.
         */
        constructor(description: string, parameters: Parameter[]) {
            super(description);

            this.parameters = parameters;
        }
    }
}
