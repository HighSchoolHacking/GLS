/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for starting to declare a class.
     */
    export class ClassStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("classDescriptor", "The class name and optional generics.", true),
            new Parameters.SingleParameter("parentClassDescriptor", "A parent class name and optional generics.", false)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ClassStartCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (classDescriptor[, parentClassDescriptor]).
         */
        public render(parameters: string[]): LineResults {
            let line: string = "";

            line += this.language.properties.classes.declareStartLeft;
            line += this.context.convertCommon("type", parameters[1]);

            if (parameters.length === 3) {
                line += this.language.properties.classes.declareExtendsLeft;
                line += this.context.convertCommon("type", parameters[2]);
                line += this.language.properties.classes.declareExtendsRight;
            }

            let lines: CommandResult[] = [new CommandResult(line, 0)];
            this.addLineEnder(lines, this.language.properties.classes.declareStartRight, 1);

             return new LineResults(lines, false);
        }
    }
}
