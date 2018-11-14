import { unweightedDepthFirstSearch, weightedDepthFirstSearch } from "../Algorithms/DepthFirstSearch";
import { UnweightedNode } from "../Data/UnweightedNode";
import { WeightedNode } from "../Data/WeightedNode";

export function testUnweighted(): void {
    let adjacencies: { [i: string]: string[] } = {
        "root": ["apple", "banana"],
        "apple": ["red", "yellow"],
        "banana": ["yellow"],
        "red": [],
        "yellow": []
    };
    let nodes: { [i: string]: UnweightedNode<string> } = {};

    for (let key in adjacencies) {
        let node: UnweightedNode<string> = new UnweightedNode<string>(key);
        nodes[key] = node;
    }

    for (let key in adjacencies) {
        let neighborKeys: string[] = adjacencies[key];
        let node: UnweightedNode<string> = nodes[key];

        for (let neighborKey of neighborKeys) {
            node.addNeighbor(nodes[neighborKey]);
            console.log(`${key} borders ${neighborKey}`);
        }
    }

    for (let node of unweightedDepthFirstSearch(nodes["root"])) {
        console.log(node.data);
    }
}

export function testWeighted(): void {
    console.log("Hello, world!");
}

