import { CaseStyle } from "../../Casing/CaseStyle";

/**
 * Metadata on a language's file content syntax.
 */
export class FileSyntax {
    /**
     * Lines at the end of each file.
     */
    public endLines: string[];

    /**
     * How indented each file's contents should be.
     */
    public indentation: number;

    /**
     * Casing for file name and paths in file start lines.
     */
    public startCase: CaseStyle;

    /**
     * Lines at the start of every file.
     *
     * @remarks "{0}" is replaced with the file name; "{1}" with the file path.
     */
    public startLines: string[];
}
