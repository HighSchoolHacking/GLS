/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of an if statement.
     */
    export class IfStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("conditional", "A conditional to check.", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return IfStartCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (conditional).
         */
        public render(parameters: string[]): LineResults {
            let line: string = this.language.properties.conditionals.if;
            line += this.language.properties.conditionals.startLeft;
            line += parameters[1];

            let lines: CommandResult[] = [new CommandResult(line, 0)];
            this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);

            return new LineResults(lines, false);
        }
    }
}
