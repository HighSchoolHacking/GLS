/**
 * Metadata on a language's exceptions.
 */
export class ExceptionProperties {
    /**
     * End of a try, catch or finally block.
     */
    public blockEnd: string;

    /**
     * The keyword used for "catch".
     */
    public catch: string;

    /**
     * Links alias and ExceptionType in catchstart statement.
     */
    public catchStartLink: string;

    /**
     * Middle of catchstart statement.
     */
    public catchStartMiddle: string;

    /**
     * End of catchstart statement.
     */
    public catchStartRight: string;

    /**
     * The name of the exception class.
     */
    public className: string;

    /**
     * The keyword used for "finally".
     */
    public finally: string;

    /**
     * End of finallystart statement.
     */
    public finallyStartRight: string;

    /**
     * Whether a langauge requires exception type.
     */
    public requiresExceptionType: boolean;

    /**
     * The keyword used for "throw".
     */
    public throw: string;

    /**
     * Middle of throwexception command.
     */
    public throwExceptionMiddle: string;

    /**
     * End of throwexception line;
     */
    public throwExceptionRight: string;

    /**
     * The keyword used for "try".
     */
    public try: string;

    /**
     * End of a trystart statement.
     */
    public tryStartRight: string;

    /**
     * A prefix to put before an exception's caught variable.
     */
    public variablePrefix: string;
}
