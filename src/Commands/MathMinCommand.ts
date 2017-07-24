import { Import } from "../Languages/Imports/Import";
import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { NativeCallCommand } from "./NativeCallCommand";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command that returns the greater of two numbers.
 */
export class MathMinCommand extends NativeCallCommand {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("name", "The name of the first variable.", true),
        new SingleParameter("name", "The name of the second variable.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return MathMinCommand.parameters;
    }

    /**
     * @returns Metadata on how to perform the native call.
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.math.min;
    }

    /**
     * @returns Any imports this native command requires.
     */
    protected retrieveImports(): Import[] {
        return this.language.properties.math.requiredImports;
    }
}
