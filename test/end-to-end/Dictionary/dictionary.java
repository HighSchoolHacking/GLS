//
import java.util.HashMap;

// Dictionary types
HashMap<String, int> foo = new HashMap<String, int>();
HashMap<String, HashMap<String, int>> bar = new HashMap<String, new HashMap<String, int>>();

// Indices
foo["baz"] = 7;
int qux = foo["baz"];

// In-place initialization
HashMap<String, int> aaa = new HashMap<String, int>() {{
    put("bbb", 1);
    put("ccc", 2);
    put("ddd", 3);
}};
//
