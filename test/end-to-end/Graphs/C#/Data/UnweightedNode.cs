using Graphs.Data;
using System.Collections.Generic;

namespace Graphs.Data
{

    /// <summary>
    /// An unweighted, undirected node in a graph.
    /// </summary>
    public class UnweightedNode<T> : INode<UnweightedNode<T>>
    {
        public T Data;
        private List<UnweightedNode<T>> neighborNodes;

        public UnweightedNode(T data)
        {
            this.Data = data;
            this.neighborNodes = new List<UnweightedNode<T>>();
        }

        public void AddNeighbor(UnweightedNode<T> node)
        {
            this.neighborNodes.Add(node);
        }

        public List<UnweightedNode<T>> GetNeighborsInOrder()
        {
            return this.neighborNodes;
        }
    }
}

