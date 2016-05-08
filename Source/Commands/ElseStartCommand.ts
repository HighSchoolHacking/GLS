import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for the beginning of an else statement.
 */
export class ElseStartCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: ().
     */
    public render(parameters: string[]): LineResults {
        let lines = [new CommandResult("", -1)],
            indentation: number;

        if (!this.language.properties.style.separateBraceLines) {
            lines[0].text = "\0";
            lines.push(new CommandResult("", 0));
        }

        this.addLineEnder(lines, this.language.properties.conditionals.continueLeft, 0);
        lines[lines.length - 1].text += this.language.properties.conditionals.else;

        if (this.language.properties.style.separateBraceLines) {
            lines.push(new CommandResult("", 1));
        } else {
            lines[lines.length - 1].indentation = 1;
        }

        lines[lines.length - 1].text += this.language.properties.conditionals.continueRight;

        return new LineResults(lines, false);
    }
}
