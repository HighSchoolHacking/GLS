import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * A command for a list pop statement.
 */
export class ListPopFrontCommand extends NativeCallCommand {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.ListPopFront,
        [],
        [
            new SingleParameter("name", "The name of the list.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListPopFrontCommand.metadata;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.lists.popFront;
    }
}
