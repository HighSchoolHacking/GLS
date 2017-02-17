/**
 * Metadata on a language's conditionals.
 */
export class ConditionalProperties {
    /**
     * How to start the continuation of a conditional.
     */
    public continueLeft: string;

    /**
     * How to end the condinuation of a conditional.
     */
    public continueRight: string;

    /**
     * The keyword used for "elif" / "else if".
     */
    public elif: string;

    /**
     * The keyword used for "else".
     */
    public else: string;

    /**
     * How to end a conditional.
     */
    public end: string;

    /**
     * The keyword used for "if".
     */
    public if: string;

    /**
     * How to start a conditional's statement line.
     */
    public startLeft: string;

    /**
     * How to end a conditional's statement line.
     */
    public startRight: string;
}
