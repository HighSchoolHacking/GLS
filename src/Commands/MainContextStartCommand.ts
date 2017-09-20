import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for starting a main context.
 */
export class MainContextStartCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: CommandResult[] = [];
        const startLines: string[] = this.language.properties.main.contextStartLines;

        for (const startLine of startLines) {
            output.push(new CommandResult(startLine, 0));
        }

        if (output.length !== 0) {
            output[output.length - 1].indentation = this.language.properties.main.contextIndentation;
        }

        return new LineResults(output, false);
    }
}
