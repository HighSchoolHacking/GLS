import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for declaring a list type.
 */
export class ListTypeCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.ListType,
        [],
        [
            new SingleParameter("type", "The type of the list", true)
        ]);

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
        let typeName: string;

        if (this.language.properties.lists.asArray) {
            typeName = parameters[1] + "[]";
        } else {
            typeName = "list<" + parameters[1] + ">";
        }

        typeName = this.context.convertCommon("type", typeName);

        const results = LineResults.newSingleLine(typeName, false);

        results.addImports(this.language.properties.lists.requiredImports);

        return results;
    }
}
