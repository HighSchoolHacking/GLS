import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Starts a try block.
 */
export class TryStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.TryStart)
        .withDescription("Starts a try block")
        .withIndentation([1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return TryStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const line: string = this.language.syntax.exceptions.try;

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.syntax.exceptions.tryStartRight, 1);

        return new LineResults(lines);
    }
}
