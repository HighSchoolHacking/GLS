import { NativeCallSyntax } from "../Languages/Properties/Syntax/NativeCallSyntax";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * Retrieves the length of an string.
 */
export class StringLengthCommand extends NativeCallCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringLength)
        .withDescription("Retrieves the length of an string.")
        .withParameters([new SingleParameter("string", "A string to retrieve the length of.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringLengthCommand.metadata;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallSyntax(): NativeCallSyntax {
        return this.language.syntax.strings.length;
    }
}
