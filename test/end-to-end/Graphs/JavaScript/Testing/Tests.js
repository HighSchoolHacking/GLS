const { unweightedDepthFirstSearch, weightedDepthFirstSearch } = require("../Algorithms/DepthFirstSearch");
const { UnweightedNode } = require("../Data/UnweightedNode");
const { WeightedNode } = require("../Data/WeightedNode");

exports.testUnweighted = function testUnweighted() {
    let adjacencies = {
        "root": ["apple", "banana"],
        "apple": ["red", "yellow"],
        "banana": ["yellow"],
        "red": [],
        "yellow": []
    };
    let nodes = {};

    for (let key in adjacencies) {
        let node = new UnweightedNode(key);
        nodes[key] = node;
    }

    for (let key in adjacencies) {
        let neighborKeys = adjacencies[key];
        let node = nodes[key];

        for (let neighborKey of neighborKeys) {
            node.addNeighbor(nodes[neighborKey]);
            console.log(`${key} borders ${neighborKey}`);
        }
    }

    for (let node of unweightedDepthFirstSearch(nodes["root"])) {
        console.log(node.data);
    }
}

exports.testWeighted = function testWeighted() {
    console.log("Hello, world!");
}
