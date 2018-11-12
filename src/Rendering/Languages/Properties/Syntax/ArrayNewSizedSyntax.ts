/**
 * Metadata on a language's fixed size array creation syntax.
 */
export class ArrayNewSizedSyntax {
    /**
     * Whether fixed size creation requires adding a template type and the middle string.
     */
    public includeType: boolean;

    /**
     * How to start declaring a fixed size array creation.
     */
    public left: string;

    /**
     * Characters after a template type, if it exists.
     */
    public middle: string;

    /**
     * How to finish declaring a fixed size array creation.
     */
    public right: string;
}
