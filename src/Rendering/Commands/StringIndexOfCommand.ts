import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * Returns the first index where the substring can be found within a string.
 */
export class StringIndexOfCommand extends NativeCallCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringIndexOf)
        .withDescription("Returns the first index where the substring can be found within a string")
        .withParameters([
            new SingleParameter("string", "Text to search within.", true),
            new SingleParameter("string", "Value to find within the text.", true),
            new SingleParameter("index", "Starting index to search from, if not 0.", false),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringIndexOfCommand.metadata;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.strings.indexOf;
    }
}
