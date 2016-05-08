/**
 * Metadata on a language's style.
 */
export class StyleProperties {
    /**
     * Lines at the end of each file. "{0}" is used for the file name. 
     */
    public fileEndLines: string[];

    /**
     * How indented each file's contents should be.
     */
    public fileIndentation: number;

    /**
     * Lines at the start of every file. "{0}" is used for the file name.
     */
    public fileStartLines: string[];

    /**
     * Lines at the end of a main function.
     */
    public mainEndLines: string[];

    /**
     * How indented the main function should be.
     */
    public mainIndentation: number;

    /**
     * Lines at the start of a main function.
     */
    public mainStartLines: string[];

    /**
     * Whether class method and public member names are in PascalCase
     * rather than camelCase.
     */
    public pascalCase: boolean;

    /**
     * How to start printing a line.
     */
    public printEnd: string;

    /**
     * How to end printing a line.
     */
    public printStart: string;

    /**
     * Whether block-starting braces should be moved to the next line.
     */
    public separateBraceLines: boolean;

    /**
     * How to end lines, such as "" or ";".
     */
    public semicolon: string;
}
