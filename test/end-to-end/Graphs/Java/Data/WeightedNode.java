//
package graphs.data;

import java.util.ArrayList;

public class WeightedNode<T> {
    public T data;
    public ArrayList<Edge<T>> edges;

    public WeightedNode(T data) {
        this.data = data;
        this.edges = new ArrayList<Edge<T>>();
    }
}
//
