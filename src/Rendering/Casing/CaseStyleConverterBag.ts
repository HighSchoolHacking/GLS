import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { CamelCaseTransformer } from "./CamelCaseTransformer";
import { CaseStyleConverter } from "./CaseStyleConverter";
import { DashLowerCaseTransformer } from "./DashLowerCaseTransformer";
import { DashUpperCaseTransformer } from "./DashUpperCaseTransformer";
import { DirectoryLowerCaseTransformer } from "./DirectoryLowerCaseTransformer";
import { DirectoryUpperCaseTransformer } from "./DirectoryUpperCaseTransformer";
import { FileSystemLowerCaseTransformer } from "./FileSystemLowerCaseTransformer";
import { FileSystemUpperCaseTransformer } from "./FileSystemUpperCaseTransformer";
import { PackageLowerCaseTransformer } from "./PackageLowerCaseTransformer";
import { PackageUpperCaseTransformer } from "./PackageUpperCaseTransformer";
import { PascalCaseTransformer } from "./PascalCaseTransformer";
import { PythonImportCaseTransformer } from "./PythonImportCaseTransformer";
import { SnakeCaseTransformer } from "./SnakeCaseTransformer";

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
            [CaseStyle.DashLowerCase]: new CaseStyleConverter(new DashLowerCaseTransformer()),
            [CaseStyle.DashUpperCase]: new CaseStyleConverter(new DashUpperCaseTransformer()),
            [CaseStyle.DirectoryLowerCase]: new CaseStyleConverter(new DirectoryLowerCaseTransformer()),
            [CaseStyle.DirectoryUpperCase]: new CaseStyleConverter(new DirectoryUpperCaseTransformer()),
            [CaseStyle.CamelCase]: new CaseStyleConverter(new CamelCaseTransformer()),
            [CaseStyle.FileSystemLowerCase]: new CaseStyleConverter(new FileSystemLowerCaseTransformer()),
            [CaseStyle.FileSystemUpperCase]: new CaseStyleConverter(new FileSystemUpperCaseTransformer()),
            [CaseStyle.PackageLowerCase]: new CaseStyleConverter(new PackageLowerCaseTransformer()),
            [CaseStyle.PackageUpperCase]: new CaseStyleConverter(new PackageUpperCaseTransformer()),
            [CaseStyle.PascalCase]: new CaseStyleConverter(new PascalCaseTransformer()),
            [CaseStyle.PythonImportCase]: new CaseStyleConverter(new PythonImportCaseTransformer()),
            [CaseStyle.SnakeCase]: new CaseStyleConverter(new SnakeCaseTransformer()),
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
