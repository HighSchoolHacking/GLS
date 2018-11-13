//
using Graphs.Algorithms;
using Graphs.Data;
using System.Collections.Generic;
using System;

namespace Graphs.Tests
{

    public static class Tests
    {
        public static void TestUnweighted()
        {
            Dictionary<string, string[]> adjacencies = new Dictionary<string, string[]>
            {
                { "root", new string[] { "apple", "banana" } },
                { "apple", new string[] { "red", "yellow" } },
                { "banana", new string[] { "yellow" } },
                { "red", new string[0] },
                { "yellow", new string[0] }
            };
            Dictionary<string, UnweightedNode<string>> nodes = new Dictionary<string, UneightedNode<string>>();

            foreach (string key in adjacencies.Keys)
            {
                UnweightedNode<string> node = new UnweightedNode<string>(key);
                nodes[key] = node;
            }

            foreach (KeyValuePair<string, string[]> pair in adjacencies)
            {
                string key = pair.Key;
                string[] neighborKeys = pair.Value;
                UnweightedNode<string> node = nodes[key];

                foreach (string neighborKey in neighborKeys)
                {
                    node.Neighbors.Add(nodes[neighborKey]);
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
        }
    }
}
//
