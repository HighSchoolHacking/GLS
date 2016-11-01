import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for the beginning of a finally block.
 */
export class FinallyStartCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let lines = [new CommandResult("", -1)];
        let line: CommandResult;

        if (!this.language.properties.style.separateBraceLines) {
            lines[0].text = "\0";
            lines.push(new CommandResult("", 0));
        }

        this.addLineEnder(lines, this.language.properties.exceptions.blockEnd, 0);

        line = lines[lines.length - 1];
        line.text += this.language.properties.exceptions.finally;

        this.addLineEnder(lines, this.language.properties.exceptions.finallyStartRight, 2);

        return new LineResults(lines, false);
    }
}
