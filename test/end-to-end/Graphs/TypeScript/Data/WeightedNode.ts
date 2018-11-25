import { INode } from "./INode";

/**
 * A weighted, directed node in a graph.
 */
export class WeightedNode<T> implements INode<WeightedNode<T>> {
    public data: T;
    private edges: Edge<T>[];

    public constructor(data: T) {
        this.data = data;
        this.edges = [];
    }

    public getNeighborsInOrder(): WeightedNode<T>[] {
        let nodes: WeightedNode<T>[] = [];

        for (let edge of this.edges) {
            nodes.push(edge.to);
        }

        this.edges.sort((edgeA, edgeB) => edgeA.distance < edgeB.distance ? -1 : 1);

        return nodes;
    }
}
