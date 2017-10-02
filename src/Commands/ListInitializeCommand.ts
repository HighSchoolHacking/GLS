import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new list.
 */
export class ListInitializeCommand extends Command {
	/**
	 * Metadata on the command.
	 */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ListInitialize)
        .withDescription("Initializes a new list.")
        .withParameters([
            new SingleParameter("type", "The type of object.", true),
            new RepeatingParameters(
                "Items initially in the list.",
                [
                    new SingleParameter("item", "An item initially in the list.", false)
                ])
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListInitializeCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.properties.lists.asArray) {
            parameters[0] = "array initialize";
            return this.context.convertParsed(parameters);
        }

        const typeNameRaw: string = "list<" + parameters[1] + ">";
        const typeName: string = this.context.convertCommon("type", typeNameRaw);
        let output: string = "new " + typeName;

        if (parameters.length > 2) {
            output += " { ";
            output += parameters.slice(2).join(", ");
            output += " }";
        } else {
            output += "()";
        }

        return LineResults.newSingleLine(output, false);
    }
}
