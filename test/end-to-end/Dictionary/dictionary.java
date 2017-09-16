//
// Dictionary types
HashMap<string, int> foo = new HashMap<string, int>();
HashMap<string, HashMap<string, int>> bar = new HashMap<string, new HashMap<string, int>>();

// Indices
foo["baz"] = 7;
int qux = foo["baz"];

// In-place initialization
HashMap<string, int> aaa = new HashMap<string, int>() {{
    put("bbb", 1);
    put("ccc", 2);
    put("ddd", 3);
}};
//
