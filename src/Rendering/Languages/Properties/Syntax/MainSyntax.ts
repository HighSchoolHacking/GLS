/**
 * Metadata on a language's main execution syntax.
 */
export class MainSyntax {
    /**
     * Lines at the end of a main context.
     */
    public contextEndLines: string[];

    /**
     * How indented the main context should be.
     */
    public contextIndentation: number;

    /**
     * Lines at the start of a main context.
     */
    public contextStartLines: string[];

    /**
     * Name of the language's main standalone functions group.
     */
    public group: string;

    /**
     * Lines at the end of a main function.
     */
    public mainEndLines: string[];

    /**
     * How indented the main function should be.
     */
    public mainIndentation: number;

    /**
     * Lines at the start of a main function, with {0} for file name and {1} for "throws" markers.
     */
    public mainStartLines: string[];
}
