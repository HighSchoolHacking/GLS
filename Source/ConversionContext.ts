/// <reference path="Commands/Command.ts" />
/// <reference path="Commands/CommandResult.ts" />
/// <reference path="Commands/CommandStrings.ts" />
/// <reference path="Commands/LineResults.ts" />
/// <reference path="Languages/Language.ts" />
/// <reference path="Languages/Casing/CaseStyleConverter.ts" />
/// <reference path="GlsParser.ts" />

namespace GLS {
    "use strict";

    /**
     * Driving context to use a GlsParser with a language to produce code. 
     */
    export class ConversionContext {
        /**
         * The language this context is converting GLS code into.
         */
        private language: Languages.Language;

        /**
         * A converter for transforming raw GLS syntax into language code.
         */
        private parser: GlsParser;

        /**
         * Initializes a new instance of the ConversionContext class.
         * 
         * @param language   The language this context is converting GLS code into.
         */
        constructor(language: Languages.Language) {
            this.language = language;
            this.parser = new GlsParser(this);
        }

        /**
         * @returns The language this context is converting GLS code into.
         */
        public /* readonly */ getLanguage(): Languages.Language {
            return this.language;
        }

        /**
         * Converts raw GLS syntax to the context language. 
         * 
         * @param lines   Lines of raw GLS syntax.
         * @returns Equivalent lines of code in the context language.
         */
        public convert(lines: string[]): string[] {
            let indentation: number = 0,
                output: string[] = [];

            for (let i: number = 0; i < lines.length; i += 1) {
                if (lines[i].trim() === "") {
                    output.push(this.generateTabs(indentation));
                    continue;
                }

                let lineResults: Commands.LineResults = this.parser.parseCommand(lines[i]);
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
                    output[output.length - 1] += this.language.properties.style.semicolon;
                }
            }

            return output;
        }

        /**
         * Converts a single-line command with a single argument.
         * 
         * @param command   The name of the command.
         * @param argumentRaw   A raw argument for the command.
         * @returns An equivalent line of code in the context language. 
         */
        public convertCommon(command: string, argumentRaw: string): string {
            let lineResults: Commands.LineResults = this.parser.renderParsedCommand([command, argumentRaw]);

            return lineResults.commandResults[0].text;
        }
        
        /**
         * Converts a command with pre-parsed arguments.
         * 
         * @param lineParsed   A parsed line from raw GLS syntax.
         * @returns The equivalent lines of code in the language.
         */
        public convertParsed(parameters: string[]): Commands.LineResults {
            return this.parser.renderParsedCommand(parameters);
        }

        /**
         * Converts a name to a casing style.
         * 
         * @param name   A name to convert.
         * @param casingStyle   A casing style.
         * @returns The name under the casing style.
         */
        public convertToCase(name: string, casingStyle: Languages.Casing.CaseStyle): string {
            return this.parser.convertToCase(name, casingStyle);
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
