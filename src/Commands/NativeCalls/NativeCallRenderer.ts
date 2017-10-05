import { NativeCallArgument } from "../../Languages/Properties/NativeCallArgument";
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
     * Formats a property argument for a native call, with any {#} number
     * replaced with the parameter of that index (excluding the command name).
     *
     * @param argument   An argument for a native call.
     * @param parameters   The command's name, followed by any parameters.
     * @returns The argument, with the parameters formatted inside.
     */
    protected formatArgument(argument: NativeCallArgument, parameters: string[]): string {
        let result = argument.text;

        for (let i = 1; i < parameters.length; i += 1) {
            result = result.replace(`{${i - 1}}`, parameters[i]);
        }

        return result;
    }
}
