import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's style.
 */
export class StyleProperties {
    /**
     * Lines at the end of each file.
     * 
     * @remarks "{0}" is replaced with the file name.
     */
    public fileEndLines: string[];

    /**
     * How indented each file's contents should be.
     */
    public fileIndentation: number;

    /**
     * Casing for file name and paths in file start lines.
     */
    public fileStartCase: CaseStyle;

    /**
     * Lines at the start of every file.
     * 
     * @remarks "{0}" is replaced with the file name; "{1}" with the file path.
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
