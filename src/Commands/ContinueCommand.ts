import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Prints the 'continue' keyword.
 */
export class ContinueCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Continue)
        .withDescription("Prints the 'continue' keyword.");

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ContinueCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: string = this.language.properties.loops.continue;

        return LineResults.newSingleLine(output, true);
    }
}
