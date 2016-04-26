/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for concatenating strings.
     */
    export class ConcatenateCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("string", "A string to concatenate.", true),
            new Parameters.SingleParameter("string", "A string to concatenate.", true),
            new Parameters.RepeatingParameters(
                "Additional strings to concatenate.",
                [
                    new Parameters.SingleParameter("string", "A string to concatenate.", false)
                ])
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ConcatenateCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (string, string[, string, ...])
         */
        public render(parameters: string[]): LineResults {
            let result = parameters[1];

            for (let i: number = 2; i < parameters.length; i += 1) {
                result += this.language.properties.strings.concatenate + parameters[i];
            }

            return LineResults.newSingleLine(result, false);
        }
    }
}
