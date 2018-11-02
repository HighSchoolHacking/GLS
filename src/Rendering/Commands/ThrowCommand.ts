import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { addLineEnder } from "./Utilities";

/**
 * Throws an exception.
 */
export class ThrowCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Throw)
        .withDescription("Throws an exception")
        .withParameters([
            new SingleParameter("exception", "Exception type to throw.", true),
            new SingleParameter("message", "Message to attach to the exception.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ThrowCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = this.language.syntax.exceptions.throw;
        line += " " + parameters[1];
        line += this.language.syntax.exceptions.throwMiddle;
        line += parameters[2];

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        addLineEnder(lines, this.language.syntax.exceptions.throwRight, 0);
        return new LineResults(lines).withAddSemicolon(true);
    }
}
