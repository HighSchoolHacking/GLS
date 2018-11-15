const { unweightedDepthFirstSearch, weightedDepthFirstSearch } = require("../Algorithms/DepthFirstSearch");
const { UnweightedNode } = require("../Data/UnweightedNode");
const { WeightedNode } = require("../Data/WeightedNode");

exports.testUnweighted = function testUnweighted() {
    let order = ["root", "apple", "banana", "red", "yellow"];
    let nodes = {};

    for (let key of order) {
        let node = new UnweightedNode(key);
        nodes[key] = node;
    }

    let adjacencies = {
        "root": ["apple", "banana"],
        "apple": ["red", "yellow"],
        "banana": ["yellow"],
        "red": [],
        "yellow": []
    };

    for (let key of order) {
        let node = nodes[key];
        let neighborKeys = adjacencies[key];

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
