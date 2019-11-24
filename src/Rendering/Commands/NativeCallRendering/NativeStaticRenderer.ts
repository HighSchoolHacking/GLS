import { LineResults } from "../../LineResults";
import { NativeCallRenderer } from "./NativeCallRenderer";
import { NativeCallType } from "../../Languages/Properties/Syntax/NativeCallSyntax";

/**
 * Renders a native static call.
 */
export class NativeStaticRenderer extends NativeCallRenderer {
    /**
     * Renders the native call for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const nativeParameters = parameters.slice(1);
        if (this.nativeCallSyntax.type === NativeCallType.FunctionReverse) {
            nativeParameters.reverse();
        }

        let output = "";

        output += this.nativeCallSyntax.name;
        output += "(";

        if (this.nativeCallSyntax.arguments.length !== 0) {
            output += this.formatArgument(this.nativeCallSyntax.arguments[0], nativeParameters[0]);

            for (let i = 1; i < this.nativeCallSyntax.arguments.length; i += 1) {
                const arg = this.nativeCallSyntax.arguments[i];

                output += this.nativeCallSyntax.separator + this.formatArgument(arg, nativeParameters[i]);
            }
        } else {
            output += nativeParameters[0];
            for (let i = 1; i < nativeParameters.length; i += 1) {
                output += this.nativeCallSyntax.separator + nativeParameters[i];
            }
        }

        output += ")";

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
