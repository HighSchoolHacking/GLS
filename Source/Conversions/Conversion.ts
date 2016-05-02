/// <reference path="../GlsParser.ts" />
/// <reference path="../Commands/LineResults.ts" />

namespace GLS.Conversions {
    "use strict";

    /**
     * A single conversion run from raw GLS syntax to a language.
     */
    export class Conversion {
        /**
         * 
         */
        private context: ConversionContext;

        /**
         * 
         */
        private glsLines: string[];

        /**
         * 
         */
        private allLineResults: Commands.LineResults[];

        /**
         * 
         */
        private imports: { [i: string]: string[] };

        /**
         * Initializes a new instance of the Conversion class.
         */
        constructor(context: ConversionContext, glsLines: string[]) {
            this.context = context;
            this.glsLines = glsLines;
        }

        /**
         * 
         */
        public convert() {
            this.resetState();

            this.generateAllLineResults();
            this.convertImportsToLineResults();

            let output: string[] = [];
            let indentation: number = 0;

            for (let i: number = 0; i < this.allLineResults.length; i += 1) {
                let lineResults: Commands.LineResults = this.allLineResults[i];
                let commandResults: Commands.CommandResult[] = lineResults.commandResults;

                for (let j: number = 0; j < commandResults.length; j += 1) {
                    let result: Commands.CommandResult = commandResults[j];

                    if (result.indentation < 0) {
                        indentation += result.indentation;
                    }

                    if (result.text !== "\0") {
                        output.push(this.generateTabs(indentation) + result.text);
                    }

                    if (result.indentation > 0) {
                        indentation += result.indentation;
                    }
                }

                if (lineResults.addSemicolon) {
                    output[output.length - 1] += this.context.getLanguage().properties.style.semicolon;
                }
            }

            return output;
        }

        /**
         * 
         */
        private generateAllLineResults(): void {
            for (let i: number = 0; i < this.glsLines.length; i += 1) {
                if (this.glsLines[i].trim() === "") {
                    this.allLineResults.push(Commands.LineResults.newSingleLine("", false));
                    continue;
                }

                let lineResults: Commands.LineResults = this.context.getParser().parseCommand(this.glsLines[i]);
                this.allLineResults.push(lineResults);

                if (lineResults.addedImports !== undefined) {
                    this.addImports(lineResults.addedImports);
                }
            }
        }

        /**
         * 
         */
        private convertImportsToLineResults(): void {
            for (let packageName in this.imports) {
                this.convertImportToLineResults(packageName, this.imports[packageName]);
            }
        }

        /**
         * 
         */
        private convertImportToLineResults(packageName: string, items: string[]): void {
            let parameters: string[] = ["import", packageName, ...items];
            this.allLineResults.unshift(this.context.convertParsed(parameters));
        }

        /**
         * 
         */
        private resetState(): void {
            this.allLineResults = [];
            this.imports = {};
        }

        /**
         * 
         */
        private addImports(addedImports: { [i: string]: string[] } ): void {
            for (let packageName in addedImports) {
                this.addImportItems(packageName, addedImports[packageName]);
            }
        }

        /**
         * 
         */
        private addImportItems(packageName: string, items: string[]): void {
            if (!this.imports.hasOwnProperty(packageName)) {
                this.imports[packageName] = items;
                return;
            }

            for (let i: number = 0; i < items.length; i += 1) {
                if (this.imports[packageName].indexOf(items[i]) !== -1) {
                    this.imports[packageName].push(items[i]);
                }
            }
        }

        /**
         * Generates spaces equivalent to 4-space code tabbing.
         * 
         * @param amount   How many tabs should be added.
         * @returns An all-spaces String of length = amount * 4.
         */
        private generateTabs(amount: number): string {
            let output: string = "";

            for (let i: number = 0; i < amount; i += 1) {
                output += "    ";
            }

            return output;
        }
    }
}
