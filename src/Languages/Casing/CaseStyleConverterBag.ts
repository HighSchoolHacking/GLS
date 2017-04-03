import { CamelCaseConverter } from "./CamelCaseConverter";
import { CaseStyle } from "./CaseStyle";
import { CaseStyleConverter } from "./CaseStyleConverter";
import { FileSystemCaseConverter } from "./FileSystemCaseConverter";
import { NoneConverter } from "./NoneConverter";
import { PackageLowerCaseConverter } from "./PackageLowerCaseConverter";
import { PackageUpperCaseConverter } from "./PackageUpperCaseConverter";
import { PascalCaseConverter } from "./PascalCaseConverter";
import { SnakeCaseConverter } from "./SnakeCaseConverter";

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
            [CaseStyle.None.toString()]: new NoneConverter(),
            [CaseStyle.CamelCase.toString()]: new CamelCaseConverter(),
            [CaseStyle.FileSystem.toString()]: new FileSystemCaseConverter(),
            [CaseStyle.PackageLowerCase.toString()]: new PackageLowerCaseConverter(),
            [CaseStyle.PackageUpperCase.toString()]: new PackageUpperCaseConverter(),
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
}
