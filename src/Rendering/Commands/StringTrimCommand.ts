import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * Creates a copy of a string without leading or trailing whitespace.
 */
export class StringTrimCommand extends NativeCallCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringTrim)
        .withDescription("Creates a copy of a string without leading or trailing whitespace.");

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringTrimCommand.metadata;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.strings.trim;
    }
}
