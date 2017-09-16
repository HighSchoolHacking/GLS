import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for ending a main function.
 */
export class MainEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: CommandResult[] = [];
        const endLines: string[] = this.language.properties.style.mainEndLines;

        for (const endLine of endLines) {
            output.push(new CommandResult(endLine, 0));
        }

        if (output.length !== 0) {
            output[0].indentation = -this.language.properties.style.mainIndentation;
        }

        return new LineResults(output, false);
    }
}
