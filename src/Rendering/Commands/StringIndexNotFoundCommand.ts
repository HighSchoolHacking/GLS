import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * The value returned by string searching when a substring isn't found.
 */
export class StringIndexNotFoundCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringIndexNotFound).withDescription(
        "The value returned by string searching when a substring isn't found.",
    );

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringIndexNotFoundCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const output: string = this.language.syntax.strings.indexOfNotFound;

        return LineResults.newSingleLine(output, false);
    }
}
