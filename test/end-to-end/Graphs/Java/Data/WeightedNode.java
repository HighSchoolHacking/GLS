package graphs.data;

import graphs.data.INode;
import java.util.ArrayList;

/**
 * A weighted, directed node in a graph.
 */
public class WeightedNode<T> implements INode<WeightedNode<T>> {
    public T data;
    private ArrayList<Edge<T>> edges;

    public WeightedNode(T data) {
        this.data = data;
        this.edges = new ArrayList<Edge<T>>();
    }

    public ArrayList<WeightedNode<T>> getNeighborsInOrder() {
        ArrayList<WeightedNode<T>> nodes = new ArrayList<WeightedNode<T>>();

        for (Edge<T> edge : this.edges) {
            nodes.add(edge.to);
        }

        this.edges.sort((edgeA, edgeB) -> edgeA.distance < edgeB.distance ? 1 : -1);

        return nodes;
    }
}
