import { NativeCallType } from "../../Languages/Properties/Syntax/NativeCallSyntax";
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
        let output = "";

        output += parameters[1] + ".";
        output += this.nativeCallSyntax.name;

        if (this.nativeCallSyntax.type === NativeCallType.Function) {
            output += "(";

            if (this.nativeCallSyntax.arguments.length > 0) {
                output += this.formatArgument(this.nativeCallSyntax.arguments[0], parameters[1]);

                for (let i = 1; i < this.nativeCallSyntax.arguments.length; i += 1) {
                    output += ", " + this.formatArgument(this.nativeCallSyntax.arguments[i], parameters[1]);
                }
            }

            if (parameters.length > 2) {
                if (this.nativeCallSyntax.arguments.length > 0) {
                    output += ", ";
                }

                output += parameters[2];

                for (let i = 3; i < parameters.length; i += 1) {
                    output += ", " + parameters[i];
                }
            }

            output += ")";
        }

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }
}
