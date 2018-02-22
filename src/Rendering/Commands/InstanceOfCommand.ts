import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * Checks whether a variable is an instance of a class.
 */
export class InstanceOfCommand extends NativeCallCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.InstanceOf)
        .withDescription("Declares a method within an interface.")
        .withParameters([
            new SingleParameter("variableName", "Variable to check.", true),
            new SingleParameter("className", "Class the variable might be an instance of", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return InstanceOfCommand.metadata;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.classes.instanceOf;
    }
}
