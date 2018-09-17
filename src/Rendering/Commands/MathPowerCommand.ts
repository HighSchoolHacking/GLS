import { NativeCallSyntax } from "../Languages/Properties/Syntax/NativeCallSyntax";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { NativeCallCommand } from "./NativeCallCommand";

/**
 * Calculates a number to the power of another number.
 */
export class MathPowerCommand extends NativeCallCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MathPower)
        .withDescription("Calculates a number to the power of another number.")
        .withParameters([
            new SingleParameter("name", "The name of the first variable.", true),
            new SingleParameter("name", "The name of the second variable.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MathPowerCommand.metadata;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallSyntax(): NativeCallSyntax {
        return this.language.syntax.math.power;
    }
}
