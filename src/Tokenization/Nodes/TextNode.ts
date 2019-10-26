import { IBudgieNode } from "./IBudgieNode";

/**
 * Budgie node for a raw text argument.
 */
export class TextNode implements IBudgieNode {
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
