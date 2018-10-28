//
using System.Collections.Generic;

// Dictionary types
Dictionary<string, int> foo = new Dictionary<string, int>();
Dictionary<string, Dictionary<string, int>> bar = new Dictionary<string, new Dictionary<string, int>>();

// Indices
foo["baz"] = 7;
int qux = foo["baz"];

// In-place initialization
Dictionary<string, int> aaa = new Dictionary<string, int>
{
    { "bbb", 1 },
    { "ccc", 2 },
    { "ddd", 3 }
};
//
