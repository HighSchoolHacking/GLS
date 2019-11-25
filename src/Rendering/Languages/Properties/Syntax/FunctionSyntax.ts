import { CaseStyle } from "../../Casing/CaseStyle";
import { ReturnTypePosition } from "./ReturnTypePosition";

/**
 * Metadata on a language's function syntax.
 */
export class FunctionSyntax {
    /**
     * Case style for function names.
     */
    public case: CaseStyle;

    /**
     * A line for after a function's definition.
     */
    public defineEnd: string;

    public defineStartLeft: string;

    public defineStartMiddle: string;

    /**
     * A suffix after defining a function, such as " {" or ":".
     */
    public defineStartRight: string;

    /**
     * Whether generic static functions should move the generic type to before the return type.
     */
    public explicitNewStaticGenericType: boolean;

    /**
     * Whether functions should explicitly mark which exceptions they may throw.
     */
    public explicitThrows: boolean;

    /**
     * Whether langauge requires function to declare possible exceptions.
     */
    public requiresExceptions: boolean;

    public returnTypePosition: ReturnTypePosition;

    /**
     * Precedes exceptions that the function throws.
     */
    public throwsMarker: string;

    /**
     * Characters after a calling function's name.
     */
    public callLeft: string;

    /**
     * Characters between arguments when a calling a function.
     */
    public callMiddle: string;

    /**
     * Characters to finish calling a function
     */
    public callRight: string;
}
