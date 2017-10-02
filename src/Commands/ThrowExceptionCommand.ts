import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Throws an exception.
 */
export class ThrowExceptionCommand extends Command {
	/**
	 * Metadata on the command.
	 */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ThrowException)
        .withDescription("Throws an exception.")
        .withParameters([
            new SingleParameter("exception", "Exception to throw.", true),
            new SingleParameter("message", "Message to attach to the exception.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ThrowExceptionCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = this.language.properties.exceptions.throw;
        line += " " + parameters[1];
        line += this.language.properties.exceptions.throwExceptionMiddle;
        line += "\"" + parameters[2] + "\"";

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.properties.exceptions.throwExceptionRight, 0);
        return new LineResults(lines, true);
    }
}
