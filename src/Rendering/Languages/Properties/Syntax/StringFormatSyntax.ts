/**
 * Metadata on a language's string formatting syntax.
 */
export class StringFormatSyntax {
    /**
     * Abbreviated middle of a format string if no inputs are provided.
     */
    public formatAbbreviated: string;

    /**
     * Start of a format string input.
     */
    public formatInputLeft: string;

    /**
     * End of a format string input.
     */
    public formatInputRight: string;

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
