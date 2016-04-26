/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the start of declaring a variable.
     */
    export class VariableStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("name", "The name of the variable.", true),
            new Parameters.SingleParameter("type", "The type of the variable.", true),
            new Parameters.SingleParameter("value", "The start of the value of the variable.", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return VariableStartCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, value).
         */
        public render(parameters: string[]): LineResults {
            // Languages like C# will give the last value in parameters including a "\n"
            let newParameters: string[] = ["variable"];
            for (let i: number = 1; i < parameters.length; i += 1) {
                newParameters.push(parameters[i].split("\n")[0]);
            }

            let output = this.context.convertParsed(newParameters);
            output.addSemicolon = false;

            // Languages like C# might need to pass a separate "\n{" through
            if (this.language.properties.style.separateBraceLines) {
                let lastParameter = parameters[parameters.length - 1];
                if (lastParameter.indexOf("\n") !== -1) {
                    lastParameter = lastParameter.split("\n")[1];
                    output.commandResults.push(new CommandResult(lastParameter, 1));
                }
            } else {
                output.commandResults[output.commandResults.length - 1].indentation += 1;
            }

            return output;
        }
    }
}
