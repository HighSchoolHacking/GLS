/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of a foreach loop over a container's keys.
     */
    export class ForEachKeyStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("container", "A container to iterate over.", true),
            new Parameters.SingleParameter("keyName", "The name of the iteration key variable.", true),
            new Parameters.SingleParameter("keyType", "The type of the iteration key variable.", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ForEachKeyStartCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        public render(parameters: string[]): LineResults {
            if (this.language.properties.loops.forEachAsMethod) {
                return this.renderForEachAsMethod(parameters);
            } else {
                return this.renderForEachAsLoop(parameters);
            }
        }

        /**
         * Renders a Ruby-style method iteration.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        public renderForEachAsMethod(parameters: string[]): LineResults {
            let output: string = parameters[1];
            output += this.language.properties.loops.forEachGetKeys;
            output += parameters[2];
            output += this.language.properties.loops.forEachRight;

            return new LineResults([new CommandResult(output, 1)], false);
        }

        /**
         * Renders a traditional foreach loop.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        public renderForEachAsLoop(parameters: string[]): LineResults {
            let line: string = this.language.properties.loops.foreach,
                output: CommandResult[];

            line += this.language.properties.conditionals.startLeft;

            if (this.language.properties.variables.declarationRequired) {
                let variableInline = this.context.convertParsed(["variable inline", parameters[2], parameters[3]]);

                line += this.language.properties.variables.declaration;
                line += variableInline.commandResults[0].text;
            } else {
                line += parameters[2];
            }

            line += this.language.properties.loops.forEachMiddle;
            line += parameters[1];
            line += this.language.properties.loops.forEachGetKeys;
            line += this.language.properties.loops.forEachRight;

            output = [new CommandResult(line, 0)];
            this.addLineEnder(output, this.language.properties.conditionals.startRight, 1);

            return new LineResults(output, false);
        }
    }
}
