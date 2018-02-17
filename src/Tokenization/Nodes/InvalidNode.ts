import { IGlsNode } from "./IGlsNode";

/**
 * GLS node that failed to parse due to invalid syntax.
 */
export class InvalidNode implements IGlsNode {
    /**
     * Reason the syntax is considered invalid.
     */
    private complaint: string;

    /**
     * Raw string with invalid syntax.
     */
    private rawString: string;

    /**
     * Initializes a new instance of the InvalidNode class.
     *
     * @param complaint   Reason the syntax is considered invalid.
     * @param rawString   Raw string with invalid syntax.
     */
    public constructor(complaint: string, rawString: string) {
        this.complaint = complaint;
        this.rawString = rawString;
    }

    public toString() {
        return `! ${this.complaint}: ${this.rawString}`;
    }
}
