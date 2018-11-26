import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Sets an item in a list by index.
 */
export class ListSetCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ListSet)
        .withDescription("Sets an item from a list by index")
        .withParameters([
            new SingleParameter("list", "List to look within.", true),
            new SingleParameter("index", "Index within the list.", true),
            new SingleParameter("value", "Value to store under the index.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListSetCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = parameters[1];
        output += this.language.syntax.lists.setLeft;
        output += parameters[2];
        output += this.language.syntax.lists.setMiddle;
        output += parameters[3];
        output += this.language.syntax.lists.setRight;

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
