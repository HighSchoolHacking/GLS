/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for initializing a new list.
     */
    export class ListInitializeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("type", "The type of object.", true),
            new Parameters.RepeatingParameters(
                "Items initially in the list.",
                [
                    new Parameters.SingleParameter("item", "An item initially in the list.", false)
                ])
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ListInitializeCommand.parameters;
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
            if (this.language.properties.lists.asArray) {
                parameters[0] = "array initialize";
                return this.context.convertParsed(parameters);
            }

            let typeNameRaw: string = "list<" + parameters[1] + ">",
                typeName: string = this.context.convertCommon("type", typeNameRaw),
                output: string = "new " + typeName;

            if (parameters.length > 2) {
                output += " { ";
                output += parameters.slice(2).join(", ");
                output += " }";
            } else {
                output += "()";
            }

            return LineResults.newSingleLine(output, false);
        }
    }
}
