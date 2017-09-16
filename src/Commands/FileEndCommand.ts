import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for ending a file.
 */
export class FileEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: CommandResult[] = [];
        const endLines: string[] = this.language.properties.files.endLines;

        for (const line of endLines) {
            output.push(new CommandResult(line, 0));
        }

        if (output.length !== 0) {
            output[0].indentation = -this.language.properties.files.indentation;
        }

        return new LineResults(output, false);
    }
}
