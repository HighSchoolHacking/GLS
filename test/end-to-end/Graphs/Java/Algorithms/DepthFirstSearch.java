package graphs.algorithms;

import graphs.data.UnweightedNode;
import graphs.data.WeightedNode;
import java.util.ArrayList;
import java.util.HashSet;

public class DepthFirstSearch {
    public static <T> ArrayList<UnweightedNode<T>> unweightedDepthFirstSearch(UnweightedNode<T> start) {
        ArrayList<UnweightedNode<T>> nodes = new ArrayList<UnweightedNode<T>>();
        HashSet<UnweightedNode<T>> visited = new HashSet<UnweightedNode<T>>();

        DepthFirstSearch.traverseUnweightedDepthFirstSearch(start, nodes, visited);

        return nodes;
    }

    private static <T> void traverseUnweightedDepthFirstSearch(UnweightedNode<T> start, ArrayList<UnweightedNode<T>> nodes, HashSet<UnweightedNode<T>> visited) {
        nodes.add(start);
        visited.add(start);

        for (UnweightedNode<T> neighbor : start.getNeighborsInOrder()) {
            if (!visited.contains(neighbor)) {
                DepthFirstSearch.traverseUnweightedDepthFirstSearch(neighbor, nodes, visited);
            }
        }
    }

    public static <T> ArrayList<WeightedNode<T>> weightedDepthFirstSearch(WeightedNode<T> start) {
        ArrayList<WeightedNode<T>> nodes = new ArrayList<WeightedNode<T>>();
        HashSet<WeightedNode<T>> visited = new HashSet<WeightedNode<T>>();

        DepthFirstSearch.traverseWeightedDepthFirstSearch(start, nodes, visited);

        return nodes;
    }

    private static <T> void traverseWeightedDepthFirstSearch(WeightedNode<T> start, ArrayList<WeightedNode<T>> nodes, HashSet<WeightedNode<T>> visited) {
        nodes.add(start);
        visited.add(start);

        for (WeightedNode<T> node : start.getNeighborsInOrder()) {
            if (!visited.contains(node)) {
                DepthFirstSearch.traverseWeightedDepthFirstSearch(node, nodes, visited);
            }
        }
    }
}
