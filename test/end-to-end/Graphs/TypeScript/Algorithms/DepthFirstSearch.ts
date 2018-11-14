import { UnweightedNode } from "../Data/UnweightedNode";
import { WeightedNode } from "../Data/WeightedNode";

export function unweightedDepthFirstSearch<T>(start: UnweightedNode<T>): UnweightedNode<T>[] {
    let nodes: UnweightedNode<T>[] = [];
    let visited: Set<UnweightedNode<T>> = new Set<UnweightedNode<T>>();

    traverseUnweightedDepthFirstSearch(start, nodes, visited);

    return nodes;
}

function traverseUnweightedDepthFirstSearch<T>(start: UnweightedNode<T>, nodes: UnweightedNode<T>[], visited: Set<UnweightedNode<T>>): void {
    nodes.push(start);
    visited.add(start);

    for (let neighbor of start.getNeighborsInOrder()) {
        if (!visited.has(neighbor)) {
            traverseUnweightedDepthFirstSearch(neighbor, nodes, visited);
        }
    }
}

export function weightedDepthFirstSearch<T>(start: WeightedNode<T>): WeightedNode<T>[] {
    let nodes: WeightedNode<T>[] = [];
    let visited: Set<WeightedNode<T>> = new Set<WeightedNode<T>>();

    traverseWeightedDepthFirstSearch(start, nodes, visited);

    return nodes;
}

function traverseWeightedDepthFirstSearch<T>(start: WeightedNode<T>, nodes: WeightedNode<T>[], visited: Set<WeightedNode<T>>): void {
    nodes.push(start);
    visited.add(start);

    for (let node of start.getNeighborsInOrder()) {
        if (!visited.has(node)) {
            traverseWeightedDepthFirstSearch(node, nodes, visited);
        }
    }
}

