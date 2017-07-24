import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Import } from "../Languages/Imports/Import";
import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
import { Command } from "./Command";
import { ImportPathResolver } from "../Conversions/Imports/ImportPathResolver";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { StringLiteralParameter } from "./Parameters/StringLiteralParameter";

/**
 * A command for importing items from a file or package.
 */
export abstract class ImportCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new RepeatingParameters(
            "Path for the package to import from.",
            [
                new SingleParameter("path", "Part of the package path.", false)
            ]),
        new SingleParameter("use", "\"use\"", true),
        new RepeatingParameters(
            "items",
            [
                new SingleParameter("item", "An item to import from the package.", true)
            ])
    ];

    /**
     * Resolves absolute import paths to a file-relative import paths.
     */
    private static pathResolver: ImportPathResolver = new ImportPathResolver();

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ImportCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let usingSplit = parameters.indexOf("use");
        if (usingSplit === -1) {
             throw new Error("A \"use\" parameter must be in import commands.");
        }

        let lineResults = new LineResults([], false);
        let packagePath: string[] = parameters.slice(1, usingSplit);
        let items: string[] = parameters.slice(usingSplit + 1);
        let relativity: ImportRelativity = this.getRelativity();

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
