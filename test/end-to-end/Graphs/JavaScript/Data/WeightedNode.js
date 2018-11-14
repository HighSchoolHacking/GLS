
/**
 * A weighted, directed node in a graph.
 */
exports.WeightedNode = class WeightedNode {

    constructor(data) {
        this.data = data;
        this.edges = [];
    }

    getNeighborsInOrder() {
        let nodes = [];

        for (let edge of this.edges) {
            nodes.push(edge.to);
        }

        this.edges.sort((a, b) => Math.floor(a.distance - b.distance));

        return nodes;
    }
}

