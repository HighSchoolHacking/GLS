using Graphs.Algorithms;
using Graphs.Data;
using System.Collections.Generic;
using System;

namespace Graphs.Testing
{

    public static class Tests
    {
        public static void TestUnweighted()
        {
            string[] order = new string[] { "root", "apple", "banana", "red", "yellow" };
            Dictionary<string, UnweightedNode<string>> nodes = new Dictionary<string, UnweightedNode<string>>();

            foreach (string key in order)
            {
                UnweightedNode<string> node = new UnweightedNode<string>(key);
                nodes[key] = node;
            }

            Dictionary<string, string[]> adjacencies = new Dictionary<string, string[]>
            {
                { "root", new string[] { "apple", "banana" } },
                { "apple", new string[] { "red", "yellow" } },
                { "banana", new string[] { "yellow" } },
                { "red", new string[0] },
                { "yellow", new string[0] }
            };

            foreach (string key in order)
            {
                UnweightedNode<string> node = nodes[key];
                string[] neighborKeys = adjacencies[key];

                foreach (string neighborKey in neighborKeys)
                {
                    node.AddNeighbor(nodes[neighborKey]);
                    Console.WriteLine(string.Format("{0} borders {1}", key, neighborKey));
                }
            }

            foreach (UnweightedNode<string> node in DepthFirstSearch.UnweightedDepthFirstSearch(nodes["root"]))
            {
                Console.WriteLine(node.Data);
            }
        }

        public static void TestWeighted()
        {
            Console.WriteLine("Hello, world!");
        }
    }
}
