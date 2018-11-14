namespace PointClass
{
    public class Point
    {
        public int X;
        public int Y;
        protected int Vector;

        public Point(int x, int y)
        {
            this.X = x;
            this.Y = y;
            this.Vector = x * y;
        }
    }
}

