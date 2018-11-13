//
using System.Collections.Generic;

namespace Graphs.Data
{
    public class UnweightedNode<T>
    {
        public T Data;
        public List<UnweightedNode<T>> Neighbors;

        public UnweightedNode(T data)
        {
            this.Data = data;
            this.Neighbors = new List<UnweightedNode<T>>();
        }
    }
}
//
