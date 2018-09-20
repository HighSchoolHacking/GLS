import { NativeCallSyntax } from "../Languages/Properties/Syntax/NativeCallSyntax";
import { CommandNames } from "../Names/CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * Adds an item to a set.
 */
export class SetAddCommand extends NativeCallCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.SetAdd)
        .withDescription("Adds an item to a set")
        .withParameters([
            new SingleParameter("set", "A set to add an item to.", true),
            new SingleParameter("item", "An item to add to the set.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return SetAddCommand.metadata;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallSyntax(): NativeCallSyntax {
        return this.language.syntax.sets.add;
    }
}
