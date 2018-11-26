package dictionaries;

import java.util.HashMap;

class Index {
    public static void main(String[] args) {
        // Types
        HashMap<String, Integer> foo = new HashMap<String, Integer>();
        HashMap<String, HashMap<String, Integer>> bar = new HashMap<String, HashMap<String, Integer>>();

        // Indices
        foo["baz"] = 7;
        Integer qux = foo["baz"];
        System.out.println(String.format("baz is %0$d", foo["baz"]));
        System.out.println(String.format("qux is %0$d", qux));

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
        container["aaa"] = 7;
        System.out.println(container["aaa"]);
    }
}
