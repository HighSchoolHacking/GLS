import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a while loop.
 */
export class WhileStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.WhileStart)
        .withDescription("Starts a while loop.")
        .withIndentation([1])
        .withParameters([new SingleParameter("conditional", "A conditional to check.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return WhileStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = this.language.syntax.loops.whileStartLeft;
        line += this.language.syntax.loops.whileStartMiddle;
        line += this.context.convertCommon(CommandNames.Value, parameters[1]);

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.syntax.loops.whileStartRight, 1);

        return new LineResults(lines, false);
    }
}
