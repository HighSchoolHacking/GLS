import { INode } from "./INode";

/**
 * An unweighted, undirected node in a graph.
 */
export class UnweightedNode<T> implements INode<UnweightedNode<T>> {
    public data: T;
    private neighborNodes: UnweightedNode<T>[];

    public constructor(data: T) {
        this.data = data;
        this.neighborNodes = [];
    }

    public addNeighbor(node: UnweightedNode<T>): void {
        this.neighborNodes.push(node);
    }

    public getNeighborsInOrder(): UnweightedNode<T>[] {
        return this.neighborNodes;
    }
}

