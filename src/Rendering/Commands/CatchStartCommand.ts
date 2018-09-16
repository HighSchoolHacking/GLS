import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
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
        .withParameters([
            new SingleParameter("exception", "Target exception.", true),
            new SingleParameter("alias", "Alias for target exception.", true),
        ]);

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

        if (!this.language.properties.style.separateBraceLines) {
            lines[0].text = "\0";
            lines.push(new CommandResult("", 0));
        }

        this.addLineEnder(lines, this.language.properties.exceptions.blockEnd, 0);

        line = lines[lines.length - 1];
        line.text += this.language.properties.exceptions.catch;
        line.text += this.language.properties.exceptions.catchStartMiddle;
        if (this.language.properties.exceptions.requiresExceptionType) {
            line.text += parameters[1];
            line.text += this.language.properties.exceptions.catchStartLink;
        }
        line.text += parameters[2];

        this.addLineEnder(lines, this.language.properties.exceptions.catchStartRight, 2);

        return new LineResults(lines, false);
    }
}
