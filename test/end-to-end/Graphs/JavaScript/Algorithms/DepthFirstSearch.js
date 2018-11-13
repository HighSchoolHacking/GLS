//
const { UnweightedNode } = require("../Data/UnweightedNode");
const { WeightedNode } = require("../Data/WeightedNode");

exports.unweightedDepthFirstSearch = function unweightedDepthFirstSearch(start) {
    let nodes = [];
    let visited = new Set();

    traverseUnweightedDepthFirstSearch(start, nodes, visited);

    return nodes;
}

function traverseUnweightedDepthFirstSearch(start, nodes, visited) {
    nodes.push(start);
    visited.add(start);

    for (let neighbor of start.neighbors) {
        if (!visited.has(neighbor)) {
            traverseUnweightedDepthFirstSearch(neighbor, nodes, visited);
        }
    }
}

exports.weightedDepthFirstSearch = function weightedDepthFirstSearch(start) {
    let nodes = [];
    let visited = new Set();

    traverseWeightedDepthFirstSearch(start, nodes, visited);

    return nodes;
}

function traverseWeightedDepthFirstSearch(start, nodes, visited) {
    nodes.push(start);
    visited.add(start);

    for (let edge of start.edges) {
        if (!visited.has(edge.from)) {
            traverseWeightedDepthFirstSearch(edge.from, nodes, visited);
        }

        if (!visited.has(edge.to)) {
            traverseWeightedDepthFirstSearch(edge.to, nodes, visited);
        }
    }
}
//
