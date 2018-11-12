import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a list type.
 */
export class ListTypeCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ListType)
        .withDescription("Declares a list type")
        .withParameters([new SingleParameter("type", "The type of the list", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListTypeCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const typeNameLine = this.context.convertParsed([CommandNames.Type, parameters[1]]);
        const typeNameRaw: string = typeNameLine.commandResults[0].text;
        let typeName: string;

        if (this.language.syntax.lists.asArray) {
            typeName = typeNameRaw + "[]";
        } else {
            typeName = this.language.syntax.lists.className + "<" + typeNameRaw + ">";
        }

        return LineResults.newSingleLine(typeName)
            .withImports(this.language.syntax.lists.requiredImports)
            .withImports(typeNameLine.addedImports);
    }
}
