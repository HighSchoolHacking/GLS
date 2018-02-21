/**
 * Metadata on a language's comments.
 */
export class CommentProperties {
    /**
     * How to end block comments.
     */
    public blockEnd: string;

    /**
     * How to end block comment lines.
     */
    public blockLineLeft: string;

    /**
     * How to end block comment lines.
     */
    public blockLineRight: string;

    /**
     * How to start block comments.
     */
    public blockStart: string;

    /**
     * Whether documentation blocks are formatted as XML.
     */
    public docAsXml: boolean;

    /**
     * How to end documentation blocks, if not XML.
     */
    public docEnd: string;

    /**
     * How to end documentation block lines.
     */
    public docLineEnd: string;

    /**
     * How to start documentation block lines.
     */
    public docLineStart: string;

    /**
     * How to start documentation blocks, if not XML.
     */
    public docStart: string;

    /**
     * Aliases of known documentation tags.
     */
    public docTagAliases: { [i: string]: string };

    /**
     * How to end a documentation tag, if not XML.
     */
    public docTagEnd: string;

    /**
     * Raw documentation tags that name a parameter.
     */
    public docTagParameterNames: { [i: string]: string };

    /**
     * Text after a documentation after a documentation tag, if not XML.
     */
    public docTagSpaceAfter: string;

    /**
     * How to start a documentation tag, if not XML.
     */
    public docTagStart: string;

    /**
     * Raw documentation tags that contain a parameter.
     */
    public docTagsWithParameters: { [i: string]: string };

    /**
     * How to start line comments.
     */
    public lineLeft: string;

    /**
     * How to end line comments.
     */
    public lineRight: string;
}
