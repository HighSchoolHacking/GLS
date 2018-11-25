package graphs.testing;

import graphs.algorithms.DepthFirstSearch;
import graphs.data.UnweightedNode;
import graphs.data.WeightedNode;
import java.util.Arrays;
import java.util.HashMap;

public class Tests {
    public static void testUnweighted() {
        String[] order = new String[] { "root", "apple", "banana", "red", "yellow" };
        HashMap<String, UnweightedNode<String>> nodes = new HashMap<String, UnweightedNode<String>>();

        for (String key : order) {
            UnweightedNode<String> node = new UnweightedNode<String>(key);
            nodes.put(key, node);
        }

        HashMap<String, String[]> adjacencies = new HashMap<String, String[]>() {{
            put("root", new String[] { "apple", "banana" });
            put("apple", new String[] { "red", "yellow" });
            put("banana", new String[] { "yellow" });
            put("red", new String[0]);
            put("yellow", new String[0]);
        }};

        for (String key : order) {
            UnweightedNode<String> node = nodes.get(key);
            String[] neighborKeys = adjacencies.get(key);

            for (String neighborKey : neighborKeys) {
                node.addNeighbor(nodes.get(neighborKey));
                System.out.println(String.format("%s borders %s", key, neighborKey));
            }
        }

        for (UnweightedNode<String> node : DepthFirstSearch.unweightedDepthFirstSearch(nodes.get("root"))) {
            System.out.println(node.data);
        }
    }

    public static void testWeighted() {
        System.out.println("Hello, world!");
    }
}
