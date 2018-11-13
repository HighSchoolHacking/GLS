//
namespace Graphs.Data
{
    public class Edge<T>
    {
        public WeightedNode<T> From;
        public WeightedNode<T> To;

        public Edge(WeightedNode<T> from, WeightedNode<T> to)
        {
            this.From = from;
            this.To = to;
        }
    }
}
//
