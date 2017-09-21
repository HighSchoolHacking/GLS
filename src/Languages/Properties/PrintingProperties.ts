import { Import } from "../Imports/Import";

/**
 * Metadata on a language's printing.
 */
export class PrintingProperties {
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
