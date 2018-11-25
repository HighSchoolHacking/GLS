package graphs.data;

import java.util.ArrayList;
import java.util.HashSet;

public interface INode<TNode> {
    public ArrayList<TNode> getNeighborsInOrder();
}
