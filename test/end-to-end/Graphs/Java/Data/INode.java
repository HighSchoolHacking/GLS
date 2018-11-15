package graphs.data;

import java.util.ArrayList;

public interface INode<TNode> {
    public ArrayList<TNode> getNeighborsInOrder();
}
