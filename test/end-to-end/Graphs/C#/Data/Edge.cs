namespace Graphs.Data
{
    public class Edge<T>
    {
        public double Distance;
        public WeightedNode<T> From;
        public WeightedNode<T> To;

        public Edge(double distance, WeightedNode<T> from, WeightedNode<T> to)
        {
            this.Distance = distance;
            this.From = from;
            this.To = to;
        }
    }
}

