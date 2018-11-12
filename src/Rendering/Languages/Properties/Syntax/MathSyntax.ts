import { NativeCallSyntax } from "./NativeCallSyntax";

/**
 * Metadata on a language's math syntax.
 */
export class MathSyntax {
    /**
     * How to retrieve the absolute value of a number.
     */
    public absolute: NativeCallSyntax;

    /**
     * How to convert a double to an int.
     */
    public asInt: NativeCallSyntax;

    /**
     * How to retrieve the largest integer >= a number
     */
    public ceiling: NativeCallSyntax;

    /**
     * How to retrieve the largest integer <= a number.
     */
    public floor: NativeCallSyntax;

    /**
     * The name of the math global or namespace.
     */
    public mathName: string;

    /**
     * How to retrieve the greater of two numbers.
     */
    public max: NativeCallSyntax;

    /**
     * How to retrieve the lower of two numbers.
     */
    public min: NativeCallSyntax;

    /**
     * How to retrieve number a to the power of number b.
     */
    public power: NativeCallSyntax;
}
