/**
 * Metadata on a language's exceptions.
 */
export class ExceptionProperties {
    /**
     * The name of the exception class.
     */
    public className: string;

    /**
     * The keyword used for "catch".
     */
    public catch: string;

    /**
     * The keyword used for "finally".
     */
    public finally: string;

    /**
     * The keyword used for "throw".
     */
    public throw: string;

    /**
     * The keyword used for "try".
     */
    public try: string;

    /**
     * A prefix to put before an exception's caught variable.
     */
    public variablePrefix: string;
}
