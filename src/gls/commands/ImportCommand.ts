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
        new SingleParameter("package", "A container to look within.", true),
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
        let lines: CommandResult[];

        if (this.language.properties.imports.explicitLines) {
            lines = this.renderMultipleLines(parameters);
        } else {
            lines = [this.renderCombinedLine(parameters)];
        }

        return new LineResults(lines, false);
    }

    /**
     * Renders the command for a language that splits item imports across lines.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderMultipleLines(parameters: string[]): CommandResult[] {
        let results: CommandResult[] = [];

        for (let i: number = 2; i < parameters.length; i += 1) {
            results.push(this.renderLine(parameters[1], parameters[i]));
        }

        return results;
    }

    /**
     * Renders the command for a language that puts multiple items in one import.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderCombinedLine(parameters: string[]): CommandResult {
        let items: string = parameters.slice(2).join(", ");
        return this.renderLine(parameters[1], items);
    }

    /**
     * Renders a single import line of some item(s) from a package.
     * 
     * @param packageName   The name of the package.
     * @param item   Item(s) being imported.
     * A line of code in the language.
     */
    private renderLine(packageName: string, item: string): CommandResult {
        let line: string = this.language.properties.imports.left;

        if (this.language.properties.imports.itemsBeforePackage) {
            if (this.language.properties.imports.explicit) {
                line += item;
                line += this.language.properties.imports.middle;
            }

            line += this.context.convertToCase(packageName, this.language.properties.imports.case);
        } else {
            line += this.context.convertToCase(packageName, this.language.properties.imports.case);

            if (this.language.properties.imports.explicit) {
                line += this.language.properties.imports.middle;
                line += item;
            }
        }

        line += this.language.properties.imports.right;
        return new CommandResult(line, 0);
    }
}
