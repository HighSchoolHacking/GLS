import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Gets an item from a dictionary by index.
 */
export class DictionaryGetCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.DictionaryGet)
        .withDescription("Gets an item from a dictionary by key")
        .withParameters([
            new SingleParameter("dictionary", "Dictionary to look within.", true),
            new SingleParameter("key", "Key within the dictionary.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return DictionaryGetCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = parameters[1];
        output += this.language.syntax.dictionaries.getLeft;
        output += parameters[2];
        output += this.language.syntax.dictionaries.getRight;

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
