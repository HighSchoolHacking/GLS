import { IGlsNode } from "./IGlsNode";

/**
 * GLS node for a raw text argument.
 */
export class TextNode implements IGlsNode {
    /**
     * Raw command text.
     */
    public readonly text: string;

    /**
     * Initializes a new instance of the TextNode class.
     *
     * @param text   Raw command text.
     */
    public constructor(text: string) {
        this.text = text;
    }
}
