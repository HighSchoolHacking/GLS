package graphs.data;

public class Edge<T> {
    public Double distance;
    public WeightedNode<T> from;
    public WeightedNode<T> to;

    public Edge(Double distance, WeightedNode<T> from, WeightedNode<T> to) {
        this.distance = distance;
        this.from = from;
        this.to = to;
    }
}
