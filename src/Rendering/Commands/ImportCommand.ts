import { ImportPathResolver } from "../Imports/ImportPathResolver";
import { Import } from "../Languages/Imports/Import";
import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { KeywordNames } from "./KeywordNames";
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
        new RepeatingParameters(
            "Path for the package to import from.",
            [
                new SingleParameter("path", "Part of the package path.", false)
            ]),
        new KeywordParameter([KeywordNames.Use], "Keyword to import items.", true),
        new RepeatingParameters(
            "items",
            [
                new SingleParameter("item", "An item to import from the package.", true)
            ])
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
        const usingSplit = parameters.indexOf("use");
        if (usingSplit === -1) {
             throw new Error("A \"use\" parameter must be in import commands.");
        }

        const lineResults = new LineResults([], false);
        let packagePath: string[] = parameters.slice(1, usingSplit);
        const items: string[] = parameters.slice(usingSplit + 1);
        const relativity: ImportRelativity = this.getRelativity();

        if (relativity === ImportRelativity.Local) {
            packagePath = ImportCommand.pathResolver.resolve(this.context.getDirectoryPath(), packagePath);
        }

        lineResults.addImports([
            new Import(packagePath, items, this.getRelativity())
        ]);

        return lineResults;
    }

    /**
     * @returns Whether this is from an absolute package or local file.
     */
    protected abstract getRelativity(): ImportRelativity;
}
