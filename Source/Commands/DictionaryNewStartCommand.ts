/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for starting to initialize a new dictionary.
     */
    export class DictionaryNewStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("keyType", "The type of the keys.", true),
            new Parameters.SingleParameter("valueType", "Tye type of the values", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return DictionaryNewStartCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType).
         */
        public render(parameters: string[]): LineResults {
            if (!this.language.properties.dictionaries.initializeAsNew) {
                return LineResults.newSingleLine("{", false);
            }

            let output: string = "new ";

            output += this.context.convertParsed(["dictionary type", parameters[1], parameters[2]]).commandResults[0].text;

            let results: CommandResult[] = [new CommandResult(output, 0)];
            this.addLineEnder(results, this.language.properties.dictionaries.initializeStart, 1);

            return new LineResults(results, false);
        }
    }
}
