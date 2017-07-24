import { CaseStyle } from "../../Languages/Casing/CaseStyle";
import { DashLowerCaseConverter } from "./DashLowerCaseConverter";
import { DashUpperCaseConverter } from "./DashUpperCaseConverter";
import { DirectoryLowerCaseConverter } from "./DirectoryLowerCaseConverter";
import { DirectoryUpperCaseConverter } from "./DirectoryUpperCaseConverter";
import { CamelCaseConverter } from "./CamelCaseConverter";
import { CaseStyleConverter } from "./CaseStyleConverter";
import { FileSystemLowerCaseConverter } from "./FileSystemLowerCaseConverter";
import { FileSystemUpperCaseConverter } from "./FileSystemUpperCaseConverter";
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
    private converters: { [i: number /* CaseStyle */]: CaseStyleConverter };

    /**
     * Initializes a new instance of the CaseStyleConverter class.
     */
    constructor() {
        this.converters = {
            [CaseStyle.DashLowerCase]: new DashLowerCaseConverter(),
            [CaseStyle.DashUpperCase]: new DashUpperCaseConverter(),
            [CaseStyle.DirectoryLowerCase]: new DirectoryLowerCaseConverter(),
            [CaseStyle.DirectoryUpperCase]: new DirectoryUpperCaseConverter(),
            [CaseStyle.CamelCase]: new CamelCaseConverter(),
            [CaseStyle.FileSystemLowerCase]: new FileSystemLowerCaseConverter(),
            [CaseStyle.FileSystemUpperCase]: new FileSystemUpperCaseConverter(),
            [CaseStyle.PackageLowerCase]: new PackageLowerCaseConverter(),
            [CaseStyle.PackageUpperCase]: new PackageUpperCaseConverter(),
            [CaseStyle.PascalCase]: new PascalCaseConverter(),
            [CaseStyle.SnakeCase]: new SnakeCaseConverter()
        };
    }

    /**
     * Retrieves the case converter for the given casing style.
     * 
     * @param caseStyle   A casing style.
     * @returns The case converter under the given asing style.
     */
    public getConverter(caseStyle: CaseStyle): CaseStyleConverter {
        let caseStyleAlias = caseStyle;

        if (!this.converters[caseStyle]) {
            throw new Error(`Unknown case style requested: '${caseStyle}'.`);
        }

        return this.converters[caseStyleAlias];
    }
}
