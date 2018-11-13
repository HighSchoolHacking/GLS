//
export class WeightedNode<T> {
    public data: T;
    public edges: Edge<T>[];

    public constructor(data: T) {
        this.data = data;
        this.edges = [];
    }
}
//
