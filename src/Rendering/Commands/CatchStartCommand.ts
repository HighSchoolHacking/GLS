import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a catch block.
 */
export class CatchStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.CatchStart)
        .withDescription("Starts a catch block")
        .withIndentation([1])
        .withParameters([new SingleParameter("name", "Name for the caught target exception.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return CatchStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const lines = [new CommandResult("", -1)];
        let line: CommandResult;

        if (!this.language.syntax.style.separateBraceLines) {
            lines[0].text = "\0";
            lines.push(new CommandResult("", 0));
        }

        this.addLineEnder(lines, this.language.syntax.exceptions.blockEnd, 0);

        line = lines[lines.length - 1];
        line.text += this.language.syntax.exceptions.catch;
        line.text += this.language.syntax.exceptions.catchStartMiddle;
        if (this.language.syntax.exceptions.requiresExceptionType) {
            line.text += this.language.syntax.exceptions.className;
            line.text += this.language.syntax.exceptions.catchStartLink;
        }
        line.text += parameters[1];

        this.addLineEnder(lines, this.language.syntax.exceptions.catchStartRight, 2);

        return new LineResults(lines);
    }
}
