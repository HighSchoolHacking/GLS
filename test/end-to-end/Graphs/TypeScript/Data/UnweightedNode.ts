//
export class UnweightedNode<T> {
    public data: T;
    public neighbors: UnweightedNode<T>[];

    public constructor(data: T) {
        this.data = data;
        this.neighbors = [];
    }
}
//
