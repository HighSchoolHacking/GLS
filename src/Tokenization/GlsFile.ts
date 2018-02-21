import { IGlsNode } from "./Nodes/IGlsNode";

/**
 * Parsed file of GLS nodes.
 */
export class GlsFile {
    /**
     * All nodes in the file.
     */
    public readonly nodes: IGlsNode[];

    /**
     * Initializes a new instance of the GlsFile class.
     *
     * @param nodes   All nodes in the file.
     */
    public constructor(nodes: IGlsNode[]) {
        this.nodes = nodes;
    }
}
