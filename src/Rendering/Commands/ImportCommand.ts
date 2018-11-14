import { ImportPathResolver } from "../Imports/ImportPathResolver";
import { Import } from "../Languages/Imports/Import";
import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
import { LineResults } from "../LineResults";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { IParameter } from "./Metadata/Parameters/Parameter";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for importing items from a file or package.
 */
export abstract class ImportCommand extends Command {
    /**
     * Information on parameters import commands take in.
     */
    protected static parameters: IParameter[] = [
        new RepeatingParameters("Path for the package to import from", [new SingleParameter("path", "Part of the package path.", false)]),
        new KeywordParameter([KeywordNames.Use], "Keyword to import items.", false),
        new RepeatingParameters("items", [new SingleParameter("item", "An item to import from the package.", true)]),
        new KeywordParameter([KeywordNames.Types], "Keyword to import interface types.", false),
        new RepeatingParameters("types", [new SingleParameter("type", "A type to import from the package.", true)]),
    ];

    /**
     * Resolves absolute import paths to file-relative import paths.
     */
    private static pathResolver: ImportPathResolver = new ImportPathResolver();

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const useIndex = parameters.indexOf(KeywordNames.Use);
        const typesIndex = parameters.indexOf(KeywordNames.Types);

        if (useIndex === -1 && typesIndex === -1) {
            throw new Error(`One of the "${KeywordNames.Use}" or "${KeywordNames.Types}" parameters must be in import commands.`);
        }

        if (useIndex !== -1 && typesIndex !== -1 && useIndex > typesIndex) {
            throw new Error(`A "${KeywordNames.Use}" parameter must come before a "${KeywordNames.Types}" parameter.`);
        }

        if (useIndex === -1 && !this.language.syntax.interfaces.supported) {
            return new LineResults([]);
        }

        const items: string[] = this.collectUseItems(parameters, useIndex, typesIndex);

        if (this.language.syntax.interfaces.supported && typesIndex !== -1) {
            items.push(...parameters.slice(typesIndex + 1));
        }

        const relativity: ImportRelativity = this.getRelativity();
        let packagePath: string[] = this.collectPackagePath(parameters, useIndex, typesIndex);

        if (this.language.syntax.imports.useLocalRelativeImports) {
            packagePath = ImportCommand.pathResolver.resolve(this.context.getFileMetadata().getPackagePath(), packagePath);
        } else if (!this.language.syntax.imports.explicitAbsoluteFileName) {
            packagePath.pop();
        }

        if (relativity === ImportRelativity.Absolute && this.language.syntax.imports.removeFirstPathComponent) {
            packagePath.shift();
        }

        return new LineResults([]).withImports([new Import(packagePath, items, relativity)]);
    }

    /**
     * @returns Whether this is from an absolute package or local file.
     */
    protected abstract getRelativity(): ImportRelativity;

    /**
     * Collects items to be imported after a "use" keyword.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param useIndex   Index of the "use" keyword in parameters.
     * @param typesIndex   Index of the "types" keyword in parameters.
     * @returns Array of "use" items from parameters.
     */
    private collectUseItems(parameters: string[], useIndex: number, typesIndex: number): string[] {
        if (useIndex === -1) {
            return [];
        }

        if (typesIndex === -1) {
            return parameters.slice(useIndex + 1);
        }

        return parameters.slice(useIndex + 1, typesIndex);
    }

    /**
     * Collects a package path before either "use" or "types".
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param useIndex   Index of the "use" keyword in parameters.
     * @param typesIndex   Index of the "types" keyword in parameters.
     * @returns Array of package path components from parameters.
     */
    private collectPackagePath(parameters: string[], useIndex: number, typesIndex: number): string[] {
        if (useIndex === -1) {
            return parameters.slice(1, typesIndex);
        }

        return parameters.slice(1, useIndex);
    }
}
