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
        new KeywordParameter([KeywordNames.Use], "Keyword to import items.", true),
        new RepeatingParameters("items", [new SingleParameter("item", "An item to import from the package.", true)]),
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
        const usingSplit = parameters.indexOf(KeywordNames.Use);
        if (usingSplit === -1) {
            throw new Error('A "use" parameter must be in import commands.');
        }

        const items: string[] = parameters.slice(usingSplit + 1);
        const relativity: ImportRelativity = this.getRelativity();
        let packagePath: string[] = parameters.slice(1, usingSplit);

        const lineResults = new LineResults([]);
        const contextPackagePath = this.context.getFileMetadata().getPackagePath();
        const relativePackagePath = ImportCommand.pathResolver.resolve(contextPackagePath, packagePath);

        if (relativity === ImportRelativity.Local) {
            packagePath = relativePackagePath;
        } else if (!this.language.syntax.imports.useLocalRelativePaths && !this.language.syntax.imports.explicit) {
            if (
                this.isPackagePathOnlyParents(relativePackagePath.slice(0, relativePackagePath.length - 1)) ||
                this.isPackagePathSubset(packagePath.slice(0, packagePath.length - 1), contextPackagePath)
            ) {
                return lineResults;
            }
        }

        return lineResults.withImports([new Import(packagePath, items, this.getRelativity())]);
    }

    /**
     * @returns Whether this is from an absolute package or local file.
     */
    protected abstract getRelativity(): ImportRelativity;

    private isPackagePathOnlyParents(relativePackagePath: string[]): boolean {
        for (const component of relativePackagePath) {
            if (component !== "..") {
                return false;
            }
        }

        return true;
    }

    private isPackagePathSubset(packagePath: string[], contextPackagePath: string[]): boolean {
        if (packagePath.length > contextPackagePath.length) {
            return false;
        }

        if (packagePath[0] === "..") {
            return false;
        }

        for (let i = 0; i < packagePath.length; i += 1) {
            if (packagePath[i] !== contextPackagePath[i]) {
                return false;
            }
        }

        return true;
    }
}
