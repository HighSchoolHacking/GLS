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
     */
    public render(properties: NativeCallProperties, parameters: string[]): LineResults {
        const args = parameters.slice(1);

        for (const arg of properties.arguments) {
            if (args.length < arg.index) {
                args.push(this.formatArgument(arg, parameters));
            }
        }

        let result = properties.name + "(";
        result += args.join(properties.separator) + ")";

        return LineResults.newSingleLine(result, true);
    }
}
