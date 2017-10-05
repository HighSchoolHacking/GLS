import { NativeCallProperties } from "../../Languages/Properties/NativeCallProperties";
import { LineResults } from "../LineResults";

/**
 * Renders a native call command.
 */
export abstract class NativeCallRenderer {
    /**
     * Renders a native call.
     *
     * @param properties   Language properties for the native call.
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public abstract render(properties: NativeCallProperties, parameters: string[]): LineResults;

    /**
     * Formats a property argument for a native call, with "{0}" replaced
     * with the first given parameter.
     *
     * @param argument   An argument for a native call.
     * @param firstParameter   The first given parameter for the call.
     * @returns The argument, with the parameter formatted inside.
     */
    protected formatArgument(argument: string, firstParameter: string): string {
        return argument.replace("{0}", firstParameter);
    }
}
