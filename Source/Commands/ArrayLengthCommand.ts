import { Language } from "../Languages/Language";
import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { NativeCallCommand } from "./NativeCallCommand";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for a retrieving the length of an array.
 */
export class ArrayLengthCommand extends NativeCallCommand {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("name", "The name of the variable.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ArrayLengthCommand.parameters;
    }

    /**
     * @returns Metadata on how to perform the native call. 
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.arrays.length;
    }
}

