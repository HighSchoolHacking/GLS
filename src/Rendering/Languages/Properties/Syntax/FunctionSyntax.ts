import { CaseStyle } from "../../Casing/CaseStyle";

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

    /**
     * A prefix before defining a function, such as "def " or "function ".
     */
    public defineStartLeft: string;

    /**
     * A suffix after defining a function, such as " {" or ":".
     */
    public defineStartRight: string;

    /**
     * Whether return types should be explicitly stated.
     */
    public explicitReturns: boolean;

    /**
     * Whether functions should explicitly mark which exceptions they may throw.
     */
    public explicitThrows: boolean;

    /**
     * Whether langauge requires functin to declare possible exceptions.
     */
    public requiresExceptions: boolean;

    /**
     * Whether return types should be after the name, rather than before.
     */
    public returnTypeAfterName: boolean;

    /**
     * A label between function name and its type, if type is after the name.
     */
    public returnTypeMarker: string;

    /**
     * Precedes exceptions that the funtion throws.
     */
    public throwsMarker: string;
}
