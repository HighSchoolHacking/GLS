/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for initializing a new array.
     */
    export class ArrayInitializeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("type", "The type of object.", true),
            new Parameters.RepeatingParameters(
                "Items initially in the array.",
                [
                    new Parameters.SingleParameter("item", "An item initially in the array.", false)
                ])
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ArrayInitializeCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type[, item, ...]).
         */
        public render(parameters: string[]): LineResults {
            let typeName: string = this.context.convertCommon("type", parameters[1]),
                output: string = "";

            if (this.language.properties.arrays.initializeAsNew) {
                output += "new ";
            }

            if (this.language.properties.arrays.initializeByType) {
                if (parameters.length === 2) {
                    output += typeName + "[0]";
                    return LineResults.newSingleLine(output, false);
                }

                output += this.context.convertCommon("type", typeName + "[]");
            }

            if (this.language.properties.arrays.initializeByType) {
                output += " { ";
            } else {
                output += "[";
            }

            output += parameters.slice(2).join(", ");

            if (this.language.properties.arrays.initializeByType) {
                output += " }";
            } else {
                output += "]";
            }

            return LineResults.newSingleLine(output, false);
        }
    }
}
