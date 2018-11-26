package dictionaries;

import java.util.HashMap;

class Main {
    public static void main(String[] args) {
        // Types
        HashMap<String, Integer> foo = new HashMap<String, Integer>();
        HashMap<String, HashMap<String, Integer>> bar = new HashMap<String, HashMap<String, Integer>>();

        // Indices
        foo.put("baz", 7);
        Integer qux = foo.get("baz");
        System.out.println(String.format("baz is %d", foo.get("baz")));
        System.out.println(String.format("qux is %d", qux));

        // Initialization
        HashMap<String, Integer> container = new HashMap<String, Integer>() {{
            put("bbb", 1);
            put("ccc", 2);
            put("ddd", 3);
        }};

        // Contains Key
        Boolean containsFalse = container.containsKey("aaa");

        if (containsFalse) {
            System.out.println("wrong");
        }

        if (container.containsKey("bbb")) {
            System.out.println("contains bbb");
        }

        // Setting
        container.put("aaa", 7);
        System.out.println(container.get("aaa"));
    }
}
