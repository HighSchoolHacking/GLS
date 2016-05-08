import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { NativeCallCommand } from "./NativeCallCommand";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for a retrieving the length of an string.
 */
export class StringLengthCommand extends NativeCallCommand {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("string", "A string to retrieve the length of.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return StringLengthCommand.parameters;
    }

    /**
     * @returns Metadata on how to perform the native call. 
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.strings.length;
    }
}
