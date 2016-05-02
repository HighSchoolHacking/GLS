/// <reference path="../Commands/LineResults.ts" />
/// <reference path="../GlsParser.ts" />
/// <reference path="../Languages/Language.ts" />
/// <reference path="../Languages/Casing/CaseStyle.ts" />

namespace GLS.Conversions {
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
        public getLanguage(): Languages.Language {
            return this.language;
        }

        /**
         * @returns The converter for transforming raw GLS syntax into language code.
         */
        public getParser(): GlsParser {
            return this.parser;
        }

        /**
         * Converts raw GLS syntax to the context language.
         * 
         * @param lines   Lines of raw GLS syntax.
         * @returns Equivalent lines of code in the context language.
         */
        public convert(lines: string[]): string[] {
            let converter: Conversion = new Conversion(lines, this);

            return converter.convert();
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
    }
}
