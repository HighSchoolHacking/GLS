//
package graphs.data;

import java.util.ArrayList;

public class UnweightedNode<T> {
    public T data;
    public ArrayList<UnweightedNode<T>> neighbors;

    public UnweightedNode(T data) {
        this.data = data;
        this.neighbors = new ArrayList<UnweightedNode<T>>();
    }
}
//
