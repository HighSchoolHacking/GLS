import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for initializing a new list.
 */
export class ListInitializeCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("type", "The type of object.", true),
        new RepeatingParameters(
            "Items initially in the list.",
            [
                new SingleParameter("item", "An item initially in the list.", false)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ListInitializeCommand.parameters;
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

        let typeNameRaw: string = "list<" + parameters[1] + ">",
            typeName: string = this.context.convertCommon("type", typeNameRaw),
            output: string = "new " + typeName;

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
