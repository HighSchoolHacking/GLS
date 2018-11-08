//
using System.Collections.Generic;
using System;

namespace Dictionaries
{
    class Index
    {
        public static void Main()
        {
            // Types
            Dictionary<string, int> foo = new Dictionary<string, int>();
            Dictionary<string, Dictionary<string, int>> bar = new Dictionary<string, Dictionary<string, int>>();

            // Indices
            foo["baz"] = 7;
            int qux = foo["baz"];
            Console.WriteLine(string.Format("baz is {0}", foo["baz"]));
            Console.WriteLine(string.Format("qux is {0}", qux));

            // Initialization
            Dictionary<string, int> aaa = new Dictionary<string, int>
            {
                { "bbb", 1 },
                { "ccc", 2 },
                { "ddd", 3 }
            };

            // Contains Key
            bool containsFalse = aaa.ContainsKey("aaa");

            if (containsFalse)
            {
                Console.WriteLine("wrong");
            }

            if (aaa.ContainsKey("bbb"))
            {
                Console.WriteLine("contains bbb");
            }
        }
    }
}
//
