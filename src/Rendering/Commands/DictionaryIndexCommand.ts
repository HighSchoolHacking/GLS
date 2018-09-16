import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * An indexed dictionary lookup.
 */
export class DictionaryIndexCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.DictionaryIndex)
        .withDescription("An indexed dictionary lookup")
        .withParameters([
            new SingleParameter("dictionary", "A dictionary to look within.", true),
            new SingleParameter("index", "The index within the dictionary.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return DictionaryIndexCommand.metadata;
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
