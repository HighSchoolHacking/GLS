//
package graphs.data;

public class Edge<T> {
    public WeightedNode<T> from;
    public WeightedNode<T> to;

    public Edge(WeightedNode<T> from, WeightedNode<T> to) {
        this.from = from;
        this.to = to;
    }
}
//
