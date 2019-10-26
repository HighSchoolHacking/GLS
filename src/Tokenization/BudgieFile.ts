import { IBudgieNode } from "./Nodes/IBudgieNode";

/**
 * Parsed file of Budgie nodes.
 */
export class BudgieFile {
    /**
     * All nodes in the file.
     */
    private nodes: IBudgieNode[];

    /**
     * Initializes a new instance of the BudgieFile class.
     *
     * @param nodes   All nodes in the file.
     */
    public constructor(nodes: IBudgieNode[]) {
        this.nodes = nodes;
    }

    /**
     * @returns All nodes in the file.
     */
    public getNodes(): IBudgieNode[] {
        return this.nodes;
    }
}
