import { CaseStyle } from "../../Languages/Casing/CaseStyle";
import { CamelCaseConverter } from "./CamelCaseConverter";
import { CaseStyleConverter } from "./CaseStyleConverter";
import { DashLowerCaseConverter } from "./DashLowerCaseConverter";
import { DashUpperCaseConverter } from "./DashUpperCaseConverter";
import { DirectoryLowerCaseConverter } from "./DirectoryLowerCaseConverter";
import { DirectoryUpperCaseConverter } from "./DirectoryUpperCaseConverter";
import { FileSystemLowerCaseConverter } from "./FileSystemLowerCaseConverter";
import { FileSystemUpperCaseConverter } from "./FileSystemUpperCaseConverter";
import { PackageLowerCaseConverter } from "./PackageLowerCaseConverter";
import { PackageUpperCaseConverter } from "./PackageUpperCaseConverter";
import { PascalCaseConverter } from "./PascalCaseConverter";
import { PythonImportCaseConverter } from "./PythonImportCaseConverter";
import { SnakeCaseConverter } from "./SnakeCaseConverter";

/**
 * Holds case style converters, keyed by their case style.
 */
export class CaseStyleConverterBag {
    /**
     * Casing converters, keyed by their case style.
     */
    private converters: { [i: number /* CaseStyle */]: CaseStyleConverter };

    /**
     * Initializes a new instance of the CaseStyleConverter class.
     */
    public constructor() {
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
            [CaseStyle.PythonImportCase]: new PythonImportCaseConverter(),
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
        const caseStyleAlias = caseStyle;

        if (this.converters[caseStyle] === undefined) {
            throw new Error(`Unknown case style requested: '${caseStyle}'.`);
        }

        return this.converters[caseStyleAlias];
    }

    /**
     * Combines a series of words to the equivalent case style.
     *
     * @param words   Words to convert.
     * @returns The word's equivalent in the case style.
     */
    public convertToCase(caseStyle: CaseStyle, words: string[]): string {
        return this.getConverter(caseStyle).convert(words);
    }
}
