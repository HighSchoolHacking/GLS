import { Import } from "../Languages/Imports/Import";
import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * Gets the larger of two numbers.
 */
export class MathMaxCommand extends NativeCallCommand {
	/**
	 * Metadata on the command.
	 */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MathMax)
        .withDescription("Gets the larger of two numbers.")
        .withParameters([
            new SingleParameter("name", "The name of the first variable.", true),
            new SingleParameter("name", "The name of the second variable.", true)
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MathMaxCommand.metadata;
    }

    /**
     * @returns Any imports this native command requires.
     */
    protected retrieveImports(): Import[] {
        return this.language.properties.math.requiredImports;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.math.max;
    }
}
