import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new list of an integer size.
 */
export class ListNewSizedCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ListNewSized)
        .withDescription("Initializes a new list of an integer size")
        .withParameters([
            new SingleParameter("type", "The type of object.", true),
            new SingleParameter("size", "Length of the list.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListNewSizedCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line = "";
        line += this.language.syntax.lists.newSized.left;

        if (this.language.syntax.lists.newSized.includeType) {
            line += parameters[1];
            line += this.language.syntax.lists.newSized.middle;
        }

        line += parameters[2];
        line += this.language.syntax.lists.newSized.right;

        return LineResults.newSingleLine(line).withImports(this.language.syntax.lists.requiredImports);
    }
}
