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
         * 
         */
        public getConverter(caseStyle: CaseStyle): CaseStyleConverter {
            if (caseStyle === undefined) {
                throw new Error("No case style provided.");
            }

            let caseStyleAlias = caseStyle.toString();

            if (!this.converters.hasOwnProperty(caseStyleAlias)) {
                throw new Error(`Unknown case style requested: '${caseStyle}'.`);
            }

            return this.converters[caseStyleAlias];
        }
        
        /**
         * 
         */
        public convert(name: string, caseStyle: CaseStyle): string {
            return this.getConverter(caseStyle).convert(name);
        }
    }
}
