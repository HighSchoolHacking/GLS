import { IGlsNode } from "./Nodes/IGlsNode";

/**
 * Parsed file of GLS nodes.
 */
export class GlsFile {
    /**
     * All nodes in the file.
     */
    private nodes: IGlsNode[];

    /**
     * Initializes a new instance of the GlsFile class.
     *
     * @param nodes   All nodes in the file.
     */
    public constructor(nodes: IGlsNode[]) {
        this.nodes = nodes;
    }

    /**
     * @returns All nodes in the file.
     */
    public getNodes(): IGlsNode[] {
        return this.nodes;
    }
}
