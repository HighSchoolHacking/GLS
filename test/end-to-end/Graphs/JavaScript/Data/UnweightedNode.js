
/**
 * An unweighted, undirected node in a graph.
 */
exports.UnweightedNode = class UnweightedNode {

    constructor(data) {
        this.data = data;
        this.neighborNodes = [];
    }

    addNeighbor(node) {
        this.neighborNodes.push(node);
    }

    getNeighborsInOrder() {
        return this.neighborNodes;
    }
}
