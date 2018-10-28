import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
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
        .withDescription("Initializes a new list")
        .withParameters([
            new SingleParameter("type", "The type of object.", true),
            new RepeatingParameters("Items initially in the list", [new SingleParameter("item", "An item initially in the list.", false)]),
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
        if (this.language.syntax.lists.asArray) {
            parameters[0] = CommandNames.ArrayInitialize;
            return this.context.convertParsed(parameters);
        }

        const typeNameRaw: string = "list<" + parameters[1] + ">";
        const typeNameLine = this.context.convertParsed([CommandNames.Type, typeNameRaw]);
        let output: string = "new " + typeNameLine.commandResults[0].text;

        if (parameters.length > 2) {
            output += " { ";
            output += parameters.slice(2).join(", ");
            output += " }";
        } else {
            output += "()";
        }

        return LineResults.newSingleLine(output).withImports(typeNameLine.addedImports);
    }
}
