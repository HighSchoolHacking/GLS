import { NativeCallProperties, NativeCallType } from "../../Languages/Properties/NativeCallProperties";
import { LineResults } from "../LineResults";
import { NativeCallRenderer } from "./NativeCallRenderer";

/**
 * Renders a native member call command.
 */
export class NativeMemberCallRenderer extends NativeCallRenderer {
    /**
     * Renders a native call as a member function.
     *
     * @param properties   Language properties for the native call.
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(properties: NativeCallProperties, parameters: string[]): LineResults {
        let result = "";

        result += parameters[1] + ".";
        result += properties.name;

        if (properties.type === NativeCallType.Function) {
            const args: string[] = parameters.slice(2);

            for (const arg of properties.arguments) {
                if (args.length <= arg.index) {
                    args.push(this.formatArgument(arg, parameters));
                }
            }

            result += "(" + args.join(properties.separator) + ")";
        }

        return LineResults.newSingleLine(result, true);
    }
}
