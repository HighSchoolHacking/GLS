import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for initializing a new array.
 */
export class ArrayInitializeCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("type", "The type of object.", true),
        new RepeatingParameters(
            "Items initially in the array.",
            [
                new SingleParameter("item", "An item initially in the array.", false)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ArrayInitializeCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let typeName: string = this.context.convertCommon("type", parameters[1]);
        let output: string = "";

        if (this.language.properties.arrays.initializeAsNew) {
            output += "new ";
        }

        if (this.language.properties.arrays.initializeByType) {
            if (parameters.length === 2) {
                output += typeName + "[0]";
                return LineResults.newSingleLine(output, false);
            }

            output += this.context.convertCommon("type", typeName + "[]");
        }

        if (this.language.properties.arrays.initializeByType) {
            output += " { ";
        } else {
            output += "[";
        }

        output += parameters.slice(2).join(", ");

        if (this.language.properties.arrays.initializeByType) {
            output += " }";
        } else {
            output += "]";
        }

        return LineResults.newSingleLine(output, false);
    }
}
