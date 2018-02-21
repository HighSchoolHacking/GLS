import { LineResults } from "../../LineResults";
import { NativeCallRenderer } from "./NativeCallRenderer";

/**
 * Renders a native array call.
 */
export class NativeArrayRenderer extends NativeCallRenderer {
    /**
     * Renders the native call for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result = "";

        result += "[" + parameters[1];
        for (let i = 2; i < parameters.length; i += 1) {
            result += ", " + parameters[i];
        }

        result += "]." + this.nativeCallProperties.name;

        return LineResults.newSingleLine(result, true);
    }
}
