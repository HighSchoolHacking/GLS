import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new array of an integer size.
 */
export class ArrayNewSizedCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ArrayNewSized)
        .withDescription("Initializes a new array")
        .withParameters([
            new SingleParameter("type", "The type of object.", true),
            new SingleParameter("size", "Length of the array.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ArrayNewSizedCommand.metadata;
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
        line += this.language.syntax.arrays.newSized.left;

        if (this.language.syntax.arrays.newSized.includeType) {
            line += parameters[1];
            line += this.language.syntax.arrays.newSized.middle;
        }

        line += parameters[2];
        line += this.language.syntax.arrays.newSized.right;

        return LineResults.newSingleLine(line).withImports(this.language.syntax.arrays.requiredImports);
    }
}
