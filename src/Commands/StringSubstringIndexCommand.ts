import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * Retrieves a section of a string until an index.
 */
export class StringSubstringIndexCommand extends NativeCallCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringSubstringIndex)
        .withDescription("Retrieves a section of a string until an index")
        .withParameters([
            new SingleParameter("string", "A string to retrieve a section of.", true),
            new SingleParameter("startIndex", "Starting index of the substring.", true),
            new SingleParameter("endIndex", "Ending index of the substring.", false),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringSubstringIndexCommand.metadata;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.strings.substrings.index;
    }
}
