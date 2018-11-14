package graphs.testing;

import graphs.algorithms.DepthFirstSearch;
import graphs.data.UnweightedNode;
import graphs.data.WeightedNode;
import java.util.HashMap;
import java.util.Arrays;

public static class Tests {
    public static void testUnweighted() {
        HashMap<String, String[]> adjacencies = new HashMap<String, String[]>() {{
            put("root", new String[] { "apple", "banana" });
            put("apple", new String[] { "red", "yellow" });
            put("banana", new String[] { "yellow" });
            put("red", new String[0]);
            put("yellow", new String[0]);
        }};
        HashMap<String, UnweightedNode<string>> nodes = new HashMap<String, UnweightedNode<string>>();

        for (String key : adjacencies.keySet()) {
            UnweightedNode<string> node = new UnweightedNode<string>(key);
            nodes[key] = node;
        }

        for (Map.Entry<String, String[]> pair : adjacencies.entrySet()) {
            String key = pair.getKey();
            String[] neighborKeys = pair.getValue();
            UnweightedNode<string> node = nodes[key];

            for (String neighborKey : neighborKeys) {
                node.addNeighbor(nodes[neighborKey]);
                System.out.println(String.format("%0$s borders %1$s", key, neighborKey));
            }
        }

        for (UnweightedNode<string> node : DepthFirstSearch.unweightedDepthFirstSearch(nodes["root"])) {
            System.out.println(node.data);
        }
    }

    public static void testWeighted() {
        System.out.println("Hello, world!");
    }
}
