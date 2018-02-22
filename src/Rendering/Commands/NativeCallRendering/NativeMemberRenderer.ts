import { NativeCallType } from "../../Languages/Properties/NativeCallProperties";
import { LineResults } from "../../LineResults";
import { NativeCallRenderer } from "./NativeCallRenderer";

/**
 * Renders a native member call.
 */
export class NativeMemberRenderer extends NativeCallRenderer {
    /**
     * Renders the native call for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result = "";

        result += parameters[1] + ".";
        result += this.nativeCallProperties.name;

        if (this.nativeCallProperties.type === NativeCallType.Function) {
            result += "(";

            if (this.nativeCallProperties.arguments.length > 0) {
                result += this.formatArgument(this.nativeCallProperties.arguments[0], parameters[1]);

                for (let i = 1; i < this.nativeCallProperties.arguments.length; i += 1) {
                    result += ", " + this.formatArgument(this.nativeCallProperties.arguments[i], parameters[1]);
                }
            }

            if (parameters.length > 2) {
                if (this.nativeCallProperties.arguments.length > 0) {
                    result += ", ";
                }

                result += parameters[2];

                for (let i = 3; i < parameters.length; i += 1) {
                    result += ", " + parameters[i];
                }
            }

            result += ")";
        }

        return LineResults.newSingleLine(result, true);
    }
}
