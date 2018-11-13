//
using System.Collections.Generic;

namespace Graphs.Data
{
    public class WeightedNode<T>
    {
        public T Data;
        public List<Edge<T>> Edges;

        public WeightedNode(T data)
        {
            this.Data = data;
            this.Edges = new List<Edge<T>>();
        }
    }
}
//
