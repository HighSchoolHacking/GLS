import { NativeCallProperties } from "../../Languages/Properties/NativeCallProperties";
import { LineResults } from "../LineResults";
import { NativeCallRenderer } from "./NativeCallRenderer";

/**
 * Renders a native static call command.
 */
export class NativeStaticCallRenderer extends NativeCallRenderer {
    /**
     * Renders a native call as a static function.
     *
     * @param properties   Language properties for the native call.
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (name[, parameters, ...]).
     */
    public render(properties: NativeCallProperties, parameters: string[]): LineResults {
        let result = "";

        result += properties.name;
        result += "(" + parameters[1];

        for (const arg of properties.arguments) {
            result += ", " + this.formatArgument(arg, parameters[1]);
        }

        for (let i = 2; i < parameters.length; i += 1) {
            result += ", " + parameters[i];
        }

        result += ")";

        return LineResults.newSingleLine(result, true);
    }
}
