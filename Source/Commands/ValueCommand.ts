/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing a value.
     */
    export class ValueCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("value", "A value to parse.", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ValueCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value).
         */
        public render(parameters: string[]): LineResults {
            return LineResults.newSingleLine(this.convertValue(parameters[1]), false);
        }

        /**
         * Converts a raw value into the language's equivalent.
         * 
         * @param typeNameRaw   A raw value to convert.
         * @returns The equivalent converted value.
         */
        private convertValue(valueRaw: string): string {
            if (!this.language.properties.variables.aliases.hasOwnProperty(valueRaw)) {
                return valueRaw;
            }

            return this.language.properties.variables.aliases[valueRaw];
        }
    }
}
