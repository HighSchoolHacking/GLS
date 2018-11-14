package graphs.data;

public class Edge<T> {
    public double distance;
    public WeightedNode<T> from;
    public WeightedNode<T> to;

    public Edge(double distance, WeightedNode<T> from, WeightedNode<T> to) {
        this.distance = distance;
        this.from = from;
        this.to = to;
    }
}

