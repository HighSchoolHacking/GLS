import { NativeCallType } from "../../Languages/Properties/Syntax/NativeCallSyntax";
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
        let output = "";

        if (this.nativeCallSyntax.type === NativeCallType.FloatingLeft) {
            output += parameters[2];
            output += this.nativeCallSyntax.name;
            output += parameters[1];
        } else {
            output += parameters[1];
            output += this.nativeCallSyntax.name;
            output += parameters[2];
            output += this.nativeCallSyntax.separator;

            if (parameters.length === 4) {
                output += parameters[3];
            }
        }

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
