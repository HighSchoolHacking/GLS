import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for ending a main context.
 */
export class MainContextEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: CommandResult[] = [];
        const endLines: string[] = this.language.properties.main.contextEndLines;

        for (const endLine of endLines) {
            output.push(new CommandResult(endLine, 0));
        }

        if (output.length !== 0) {
            output[0].indentation = -this.language.properties.main.contextIndentation;
        }

        return new LineResults(output, false);
    }
}
