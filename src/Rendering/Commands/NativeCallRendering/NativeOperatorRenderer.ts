import { NativeCallType } from "../../Languages/Properties/NativeCallProperties";
import { LineResults } from "../../LineResults";
import { NativeCallRenderer } from "./NativeCallRenderer";

/**
 * Renders a native operator call.
 */
export class NativeOperatorRenderer extends NativeCallRenderer {
    /**
     * Renders the native call for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result = "";

        if (this.nativeCallProperties.type === NativeCallType.FloatingLeft) {
            result += parameters[2];
            result += this.nativeCallProperties.name;
            result += parameters[1];
        } else {
            result += parameters[1];
            result += this.nativeCallProperties.name;
            result += parameters[2];

            if (parameters.length === 4) {
                result += parameters[3];
            }
        }

        return LineResults.newSingleLine(result, true);
    }
}
