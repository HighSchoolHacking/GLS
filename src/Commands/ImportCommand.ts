import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for importing items from a package.
 */
export class ImportCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new RepeatingParameters(
            "Directory path for the directory to import from.",
            [
                new SingleParameter("directory", "Part of the directory path.", false)
            ]),
        new SingleParameter("use", "\"use\"", true),
        new RepeatingParameters(
            "items",
            [
                new SingleParameter("item", "An item to import from the package.", true)
            ])
    ];

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

        let directories: string[] = parameters.slice(1, usingSplit);
        let imports: string[] = parameters.slice(usingSplit + 1);
        let lines: CommandResult[];

        if (this.language.properties.imports.explicitLines) {
            lines = this.renderMultipleLines(directories, imports);
        } else {
            lines = [this.renderCombinedLine(directories, imports)];
        }

        return new LineResults(lines, false);
    }

    /**
     * Renders the command for a language that splits item imports across lines.
     * 
     * @param directories   Directory path to import from.
     * @param imports   Items to import from directories.
     * @returns Line(s) of code in the language.
     */
    private renderMultipleLines(directories: string[], imports: string[]): CommandResult[] {
        let results: CommandResult[] = [];

        for (let i: number = 0; i < imports.length; i += 1) {
            results.push(this.renderLine(directories, imports[i]));
        }

        return results;
    }

    /**
     * Renders the command for a language that puts multiple items in one import.
     * 
     * @param directories   Directory path to import from.
     * @param imports   Items to import from directories.
     * @returns Line(s) of code in the language.
     */
    private renderCombinedLine(directories: string[], imports: string[]): CommandResult {
        let items: string = imports.join(", ");
        return this.renderLine(directories, items);
    }

    /**
     * Renders a single import line of some item(s) from a package.
     * 
     * @param directories   Directory path to import from.
     * @param item   Item to import from directories.
     * A line of code in the language.
     */
    private renderLine(directories: string[], item: string): CommandResult {
        let line: string = this.language.properties.imports.left;

        if (this.language.properties.imports.itemsBeforePackage) {
            if (this.language.properties.imports.explicit) {
                line += item;
                line += this.language.properties.imports.middle;
            }

            line += this.context.convertToCase(directories.join("/"), this.language.properties.imports.case);
        } else {
            line += this.context.convertToCase(directories.join("/"), this.language.properties.imports.case);

            if (this.language.properties.imports.explicit) {
                line += this.language.properties.imports.middle;
                line += item;
            }
        }

        line += this.language.properties.imports.right;
        return new CommandResult(line, 0);
    }
}
