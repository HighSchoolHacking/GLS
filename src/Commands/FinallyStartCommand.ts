import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * A command for the beginning of a finally block.
 */
export class FinallyStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.FinallyStart,
        [1],
        []);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return FinallyStartCommand.metadata;
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
        line.text += this.language.properties.exceptions.finally;

        this.addLineEnder(lines, this.language.properties.exceptions.finallyStartRight, 2);

        return new LineResults(lines, false);
    }
}
