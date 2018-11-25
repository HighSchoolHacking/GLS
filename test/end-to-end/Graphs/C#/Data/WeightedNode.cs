using Graphs.Data;
using System.Collections.Generic;
using System;

namespace Graphs.Data
{

    /// <summary>
    /// A weighted, directed node in a graph.
    /// </summary>
    public class WeightedNode<T> : INode<WeightedNode<T>>
    {
        public T Data;
        private List<Edge<T>> edges;

        public WeightedNode(T data)
        {
            this.Data = data;
            this.edges = new List<Edge<T>>();
        }

        public List<WeightedNode<T>> GetNeighborsInOrder()
        {
            List<WeightedNode<T>> nodes = new List<WeightedNode<T>>();

            foreach (Edge<T> edge in this.edges)
            {
                nodes.Add(edge.To);
            }

            this.edges.Sort((edgeA, edgeB) => edgeA.Distance < edgeB.Distance ? -1 : 1);

            return nodes;
        }
    }
}
