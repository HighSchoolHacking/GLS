import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * An indexed array lookup.
 */
export class ArrayIndexCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ArrayIndex)
        .withDescription("An indexed array lookup.")
        .withParameters([
            new SingleParameter("array", "An array to look within.", true),
            new SingleParameter("index", "The index within the array.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ArrayIndexCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(parameters[1] + "[" + parameters[2] + "]", false);
    }
}
