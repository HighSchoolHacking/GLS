/**
 * Metadata on a language's string formatting.
 */
export class StringFormatProperties {
    /**
     * Start of a format string.
     */
    public formatLeft: string;

    /**
     * Middle of a format string (between the template and inputs).
     */
    public formatMiddle: string;

    /**
     * End of a format string.
     */
    public formatRight: string;

    /**
     * Start of a format string input.
     */
    public formatInputLeft: string;

    /**
     * Whether to include numbers in format string inputs.
     */
    public formatInputNumbers: boolean;

    /**
     * End of a format string input.
     */
    public formatInputRight: string;

    /**
     * Whether to include C-syle type descriptors in format string inputs.
     */
    public inputTypes: boolean;

    /**
     * Type names matched to their C-style type descriptors, if includeTypes is true.
     */
    public typeCodes: { [i: string]: string };

    /**
     * Whether to use string interpolation instead of formatting.
     */
    public useInterpolation: boolean;
}
