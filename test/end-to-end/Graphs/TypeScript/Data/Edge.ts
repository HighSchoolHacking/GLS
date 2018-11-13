//
export class Edge<T> {
    public from: WeightedNode<T>;
    public to: WeightedNode<T>;

    public constructor(from: WeightedNode<T>, to: WeightedNode<T>) {
        this.from = from;
        this.to = to;
    }
}
//
