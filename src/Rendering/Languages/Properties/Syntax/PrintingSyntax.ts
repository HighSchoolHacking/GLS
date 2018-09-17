import { Import } from "../../Imports/Import";

/**
 * Metadata on a language's printing syntax.
 */
export class PrintingSyntax {
    /**
     * How to end printing a line.
     */
    public end: string;

    /**
     * Required imports to be able to print.
     */
    public requiredImports: Import[];

    /**
     * How to start printing a line.
     */
    public start: string;
}
