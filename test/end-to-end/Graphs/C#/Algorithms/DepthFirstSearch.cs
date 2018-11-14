using Graphs.Data;
using System.Collections.Generic;

namespace Graphs.Algorithms
{

    public static class DepthFirstSearch
    {
        public static List<UnweightedNode<T>> UnweightedDepthFirstSearch<T>(UnweightedNode<T> start)
        {
            List<UnweightedNode<T>> nodes = new List<UnweightedNode<T>>();
            HashSet<UnweightedNode<T>> visited = new HashSet<UnweightedNode<T>>();

            DepthFirstSearch.TraverseUnweightedDepthFirstSearch(start, nodes, visited);

            return nodes;
        }

        private static void TraverseUnweightedDepthFirstSearch<T>(UnweightedNode<T> start, List<UnweightedNode<T>> nodes, HashSet<UnweightedNode<T>> visited)
        {
            nodes.Add(start);
            visited.Add(start);

            foreach (UnweightedNode<T> neighbor in start.GetNeighborsInOrder())
            {
                if (!visited.Contains(neighbor))
                {
                    DepthFirstSearch.TraverseUnweightedDepthFirstSearch(neighbor, nodes, visited);
                }
            }
        }

        public static List<WeightedNode<T>> WeightedDepthFirstSearch<T>(WeightedNode<T> start)
        {
            List<WeightedNode<T>> nodes = new List<WeightedNode<T>>();
            HashSet<WeightedNode<T>> visited = new HashSet<WeightedNode<T>>();

            DepthFirstSearch.TraverseWeightedDepthFirstSearch(start, nodes, visited);

            return nodes;
        }

        private static void TraverseWeightedDepthFirstSearch<T>(WeightedNode<T> start, List<WeightedNode<T>> nodes, HashSet<WeightedNode<T>> visited)
        {
            nodes.Add(start);
            visited.Add(start);

            foreach (WeightedNode<T> node in start.GetNeighborsInOrder())
            {
                if (!visited.Contains(node))
                {
                    DepthFirstSearch.TraverseWeightedDepthFirstSearch(node, nodes, visited);
                }
            }
        }
    }
}
