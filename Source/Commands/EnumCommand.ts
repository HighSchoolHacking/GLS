/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the retrieving an enum value by name.
     */
    export class EnumCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("enumName", "A container enum.", true),
            new Parameters.SingleParameter("memberName", "A member of the container enum.", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return EnumCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (enumName, memberName).
         */
        public render(parameters: string[]): LineResults {
            let result: string = "";

            result += this.language.properties.enums.valueLeft;
            result += parameters[1];
            result += this.language.properties.enums.valueMiddle;
            result += parameters[2];
            result += this.language.properties.enums.valueRight;

            return LineResults.newSingleLine(result, true);
        }
    }
}
