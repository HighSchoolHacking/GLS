package graphs.data;

import graphs.data.INode;
import java.util.ArrayList;

/**
 * An unweighted, undirected node in a graph.
 */
public class UnweightedNode<T> implements INode<UnweightedNode<T>> {
    public T data;
    private ArrayList<UnweightedNode<T>> neighborNodes;

    public UnweightedNode(T data) {
        this.data = data;
        this.neighborNodes = new ArrayList<UnweightedNode<T>>();
    }

    public void addNeighbor(UnweightedNode<T> node) {
        this.neighborNodes.add(node);
    }

    public ArrayList<UnweightedNode<T>> getNeighborsInOrder() {
        return this.neighborNodes;
    }
}
