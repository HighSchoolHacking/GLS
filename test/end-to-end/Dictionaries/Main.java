//
package dictionaries;

import java.util.HashMap;

class Index {
    public static void main(String[] args) {
        // Types
        HashMap<String, int> foo = new HashMap<String, int>();
        HashMap<String, HashMap<String, int>> bar = new HashMap<String, HashMap<String, int>>();

        // Indices
        foo["baz"] = 7;
        int qux = foo["baz"];
        System.out.println(String.format("baz is %0$d", foo["baz"]));
        System.out.println(String.format("qux is %0$d", qux));

        // Initialization
        HashMap<String, int> aaa = new HashMap<String, int>() {{
            put("bbb", 1);
            put("ccc", 2);
            put("ddd", 3);
        }};

        // Contains Key
        boolean containsFalse = aaa.containsKey("aaa");

        if (containsFalse) {
            System.out.println("wrong");
        }

        if (aaa.containsKey("bbb")) {
            System.out.println("contains bbb");
        }

        // Pair Iteration
        for (Map.Entry<String, int> pair : aaa.entrySet()) {
            String key = pair.getKey();
            int value = pair.getValue();
            System.out.println(String.format("%0$s has %1$d", key, value));
        }
    }
}
//
