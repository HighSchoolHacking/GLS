import { BudgieUtilities } from "../../../BudgieUtilities";
import { NativeCallSyntax } from "../../Languages/Properties/Syntax/NativeCallSyntax";
import { LineResults } from "../../LineResults";

/**
 * Renders a type of native call.
 */
export abstract class NativeCallRenderer {
    /**
     * Syntax for the native call.
     */
    protected nativeCallSyntax: NativeCallSyntax;

    /**
     * Initializes a new instance of the NativeCallRenderer class.
     *
     * @param nativeCallSyntax   Syntax for the native call.
     */
    public constructor(nativeCallSyntax: NativeCallSyntax) {
        this.nativeCallSyntax = nativeCallSyntax;
    }

    /**
     * Renders the native call for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    public abstract render(parameters: string[]): LineResults;

    /**
     * Formats a property argument for a native call, with "{0}" replaced
     * with the first given parameter.
     *
     * @param argument   An argument for a native call.
     * @param firstParameter   The first given parameter for the call.
     * @returns The argument, with the parameter formatted inside.
     */
    protected formatArgument(argument: string, firstParameter: string): string {
        return BudgieUtilities.stringReplaceAll(argument, "{0}", firstParameter);
    }
}
