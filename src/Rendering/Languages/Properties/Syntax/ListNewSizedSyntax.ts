/**
 * Metadata on a language's fixed size list creation syntax.
 */
export class ListNewSizedSyntax {
    /**
     * Whether fixed size creation requires adding a template type and the middle string.
     */
    public includeType: boolean;

    /**
     * How to start declaring a fixed size list creation.
     */
    public left: string;

    /**
     * Characters after a template type, if it exists.
     */
    public middle: string;

    /**
     * How to finish declaring a fixed size list creation.
     */
    public right: string;
}
