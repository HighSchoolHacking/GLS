import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for declaring a list type.
 */
export class ListTypeCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("type", "The type of the list", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ListTypeCommand.parameters;
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

        let results = LineResults.newSingleLine(typeName, false);

        if (this.language.properties.lists.requiredImports) {
            results.addImports(this.language.properties.lists.requiredImports);
        }

        return results;
    }
}
