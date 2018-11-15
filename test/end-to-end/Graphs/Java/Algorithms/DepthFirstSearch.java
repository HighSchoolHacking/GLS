package graphs.algorithms;

import graphs.data.UnweightedNode;
import graphs.data.WeightedNode;
import java.util.ArrayList;

public static class DepthFirstSearch {
    public static ArrayList<UnweightedNode<T>> unweightedDepthFirstSearch<T>(UnweightedNode<T> start) {
        ArrayList<UnweightedNode<T>> nodes = new ArrayList<UnweightedNode<T>>();
        HashSet<UnweightedNode<T>> visited = new HashSet<UnweightedNode<T>>undefined;

        DepthFirstSearch.traverseUnweightedDepthFirstSearch(start, nodes, visited);

        return nodes;
    }

    private static void traverseUnweightedDepthFirstSearch<T>(UnweightedNode<T> start, ArrayList<UnweightedNode<T>> nodes, HashSet<UnweightedNode<T>> visited) {
        nodes.add(start);
        visited.add(start);

        for (UnweightedNode<T> neighbor : start.getNeighborsInOrder()) {
            if (!visited.contains(neighbor)) {
                DepthFirstSearch.traverseUnweightedDepthFirstSearch(neighbor, nodes, visited);
            }
        }
    }

    public static ArrayList<WeightedNode<T>> weightedDepthFirstSearch<T>(WeightedNode<T> start) {
        ArrayList<WeightedNode<T>> nodes = new ArrayList<WeightedNode<T>>();
        HashSet<WeightedNode<T>> visited = new HashSet<WeightedNode<T>>undefined;

        DepthFirstSearch.traverseWeightedDepthFirstSearch(start, nodes, visited);

        return nodes;
    }

    private static void traverseWeightedDepthFirstSearch<T>(WeightedNode<T> start, ArrayList<WeightedNode<T>> nodes, HashSet<WeightedNode<T>> visited) {
        nodes.add(start);
        visited.add(start);

        for (WeightedNode<T> node : start.getNeighborsInOrder()) {
            if (!visited.contains(node)) {
                DepthFirstSearch.traverseWeightedDepthFirstSearch(node, nodes, visited);
            }
        }
    }
}
