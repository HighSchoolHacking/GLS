/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for importing items from a package.
     */
    export class ImportCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("package", "A container to look within.", true),
            new Parameters.RepeatingParameters(
                "items",
                [
                    new Parameters.SingleParameter("item", "An item to import from the package.", true)
                ])
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ImportCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        public render(parameters: string[]): LineResults {
            let lines: CommandResult[];

            if (this.language.properties.imports.explicitLines) {
                lines = this.renderMultipleLines(parameters);
            } else {
                lines = [this.renderCombinedLine(parameters)];
            }

            return new LineResults(lines, false);
        }

        /**
         * Renders the command for a language that splits item imports across lines.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        private renderMultipleLines(parameters: string[]): CommandResult[] {
            let results: CommandResult[] = [];

            for (let i: number = 2; i < parameters.length; i += 1) {
                results.push(this.renderLine(parameters[1], parameters[i]));
            }

            return results;
        }

        /**
         * Renders the command for a language that puts multiple items in one import.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        private renderCombinedLine(parameters: string[]): CommandResult {
            let items: string = parameters.slice(2).join(", ");
            return this.renderLine(parameters[1], items);
        }

        /**
         * Renders a single import line of some item(s) from a package.
         * 
         * @param packageName   The name of the package.
         * @param item   Item(s) being imported.
         * A line of code in the language.
         */
        private renderLine(packageName: string, item: string): CommandResult {
            let line: string = this.language.properties.imports.left;

            if (this.language.properties.imports.itemsBeforePackage) {
                line += item;
                line += this.language.properties.imports.middle;
                line += packageName;
            } else {
                line += packageName;
                line += this.language.properties.imports.middle;
                line += item;
            }

            line += this.language.properties.imports.right;
            return new CommandResult(line, 0);
        }
    }
}
