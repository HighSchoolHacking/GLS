import { IGlsNode } from "./IGlsNode";

/**
 * A GLS node that just contains a string.
 */
export class StringNode implements IGlsNode {
    /**
     * Raw string contents of the node.
     */
    private content: string;

    /**
     * Initializes a new instance of the StringNode class.
     *
     * @param content   Raw string contents of the node.
     */
    public constructor(content: string) {
        this.content = content;
    }

    public toString(): string {
        return this.content;
    }
}
