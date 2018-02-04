import { IGlsNode } from "./Nodes/IGlsNode";
import { InvalidNode } from "./Nodes/InvalidNode";

/**
 * Parsed file of GLS nodes.
 */
export class GlsFile {
    /**
     * Any invalid nodes from the file.
     */
    public readonly complaints: InvalidNode[];

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
        this.complaints = [];

        for (const node of nodes) {
            if (node instanceof InvalidNode) {
                this.complaints.push(node);
            }
        }
    }
}
