import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Gets an item from a list by index.
 */
export class ListGetCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ListGet)
        .withDescription("Gets an item from a list by index")
        .withParameters([
            new SingleParameter("list", "List to look within.", true),
            new SingleParameter("index", "Index within the list.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListGetCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = parameters[1];
        output += this.language.syntax.lists.getLeft;
        output += parameters[2];
        output += this.language.syntax.lists.getRight;

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
