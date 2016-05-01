/// <reference path="CamelCaseConverter.ts" />
/// <reference path="CaseStyle.ts" />
/// <reference path="CaseStyleConverter.ts" />
/// <reference path="NoneConverter.ts" />
/// <reference path="PascalCaseConverter.ts" />
/// <reference path="SnakeCaseConverter.ts" />

namespace GLS.Languages.Casing {
    "use strict";

    /**
     * A container for case style converters.
     */
    export class CaseStyleConverterBag {
        /**
         * Casing converters, keyed by their case style.
         */
        private converters: { [i: string]: CaseStyleConverter };

        /**
         * Initializes a new instance of the CaseStyleConverter class.
         */
        constructor() {
            this.converters = {
                [CaseStyle.CamelCase.toString()]: new CamelCaseConverter(),
                [CaseStyle.None.toString()]: new NoneConverter(),
                [CaseStyle.PascalCase.toString()]: new PascalCaseConverter(),
                [CaseStyle.SnakeCase.toString()]: new SnakeCaseConverter()
            };
        }

        /**
         * Retrieves the case converter for the given casing style.
         * 
         * @param caseStyle   A casing style.
         * @returns The case converter under the given asing style.
         */
        public getConverter(caseStyle: CaseStyle): CaseStyleConverter {
            let caseStyleAlias = caseStyle.toString();

            if (!this.converters.hasOwnProperty(caseStyleAlias)) {
                throw new Error(`Unknown case style requested: '${caseStyle}'.`);
            }

            return this.converters[caseStyleAlias];
        }
        
        /**
         * Converts a name to a casing style.
         * 
         * @param name   A name to convert.
         * @param casingStyle   A casing style.
         * @returns The name under the casing style.
         */
        public convert(name: string, caseStyle: CaseStyle): string {
            return this.getConverter(caseStyle).convert(name);
        }
    }
}
