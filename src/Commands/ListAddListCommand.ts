import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { NativeCallCommand } from "./NativeCallCommand";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command that adds everything in the second list to the first list.
 */
export class ListAddListCommand extends NativeCallCommand {
    /**
     * Information on parameters this command takes in.
     * second parameter contains values that will be added to first parameter
     */
    private static parameters: Parameter[] = [
        new SingleParameter("first", "The first list.", true),
        new SingleParameter("second", "The second list.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ListAddListCommand.parameters;
    }

    /**
     * @returns Metadata on how to perform the native call. 
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.lists.addList;
    }
}
