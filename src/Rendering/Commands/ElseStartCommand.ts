import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Starts an else statement.
 */
export class ElseStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ElseStart)
        .withDescription("Starts an else statement.")
        .withIndentation([-1, 1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ElseStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const lines = [new CommandResult("", -1)];

        if (!this.language.syntax.style.separateBraceLines) {
            lines[0].text = "\0";
            lines.push(new CommandResult("", 0));
        }

        this.addLineEnder(lines, this.language.syntax.conditionals.continueLeft, 0);
        lines[lines.length - 1].text += this.language.syntax.conditionals.else;

        if (this.language.syntax.style.separateBraceLines) {
            lines.push(new CommandResult("", 1));
        } else {
            lines[lines.length - 1].indentation = 1;
        }

        lines[lines.length - 1].text += this.language.syntax.conditionals.continueRight;

        return new LineResults(lines, false);
    }
}
