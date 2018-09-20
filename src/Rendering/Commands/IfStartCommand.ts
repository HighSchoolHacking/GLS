import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts an if statement.
 */
export class IfStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.IfStart)
        .withDescription("Starts an if statement")
        .withIndentation([1])
        .withParameters([new SingleParameter("conditional", "A conditional to check.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return IfStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = this.language.syntax.conditionals.if;
        line += this.language.syntax.conditionals.startLeft;
        line += parameters[1];

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.syntax.conditionals.startRight, 1);

        return new LineResults(lines, false);
    }
}
