import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Prints the 'break' keyword.
 */
export class BreakCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Break).withDescription("Prints the 'break' keyword");

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return BreakCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: string = this.language.syntax.loops.break;

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
