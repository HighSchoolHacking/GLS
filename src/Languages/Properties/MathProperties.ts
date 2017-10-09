import { NativeCallProperties } from "../Properties/NativeCallProperties";

/**
 * Metadata on a language's math.
 */
export class MathProperties {
    /**
     * How to retrieve the absolute value of a number.
     */
    public absolute: NativeCallProperties;

    /**
     * How to retrieve the largest integer >= a number
     */
    public ceiling: NativeCallProperties;

    /**
     * How to retrieve the largest integer <= a number.
     */
    public floor: NativeCallProperties;

    /**
     * The name of the math global or namespace.
     */
    public mathName: string;

    /**
     * How to retrieve the greater of two numbers.
     */
    public max: NativeCallProperties;

    /**
     * How to retrieve the lower of two numbers.
     */
    public min: NativeCallProperties;
}
