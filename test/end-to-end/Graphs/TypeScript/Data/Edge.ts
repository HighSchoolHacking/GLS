export class Edge<T> {
    public distance: number;
    public from: WeightedNode<T>;
    public to: WeightedNode<T>;

    public constructor(distance: number, from: WeightedNode<T>, to: WeightedNode<T>) {
        this.distance = distance;
        this.from = from;
        this.to = to;
    }
}
