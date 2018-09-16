import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new array.
 */
export class ArrayInitializeCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ArrayInitialize)
        .withDescription("Initializes a new array")
        .withParameters([
            new SingleParameter("type", "The type of object.", true),
            new RepeatingParameters("Items initially in the array", [
                new SingleParameter("item", "An item initially in the array.", false),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ArrayInitializeCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const typeName: string = this.context.convertCommon(CommandNames.Type, parameters[1]);
        let output = "";

        if (this.language.properties.arrays.initializeAsNew) {
            output += "new ";
        }

        if (this.language.properties.arrays.initializeByType) {
            if (parameters.length === 2) {
                output += typeName + "[0]";
                return LineResults.newSingleLine(output, false);
            }

            output += this.context.convertCommon(CommandNames.Type, typeName + "[]");
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
