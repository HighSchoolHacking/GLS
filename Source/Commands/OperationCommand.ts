/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing an operation.
     */
    export class OperationCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("value", "A value to work with.", true),
            new Parameters.SingleParameter("operator", "The operation's operator.", true),
            new Parameters.SingleParameter("value", "A value to work with.", true),
            new Parameters.RepeatingParameters(
                "Additional values and operators",
                [
                    new Parameters.SingleParameter("item", "An additional operator.", false),
                    new Parameters.SingleParameter("item", "An additional value to work with.", false)
                ])
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return OperationCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value, operator, value[, operator, value, ...]).
         */
        public render(parameters: string[]): LineResults {
            let result = this.context.convertCommon("value", parameters[1]);

            for (let i: number = 2; i < parameters.length; i += 2) {
                result += " " + this.context.convertCommon("operator", parameters[i]);
                result += " " + this.context.convertCommon("value", parameters[i + 1]);
            }

            return LineResults.newSingleLine(result, true);
        }
    }
}
