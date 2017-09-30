//
class Point
{
    public int X;
    public int Y;
    protected int Square;
    private string name;

    public Point(int x, int y)
    {
        this.X = x;
        this.Y = y;
        this.Square = x * y;
        this.name = "";
    }
}

class Measurements<T>
{
    public Measurements(T[] items)
    {
        // ...
    }
}

class Shape : Measurements<Point>
{
    public Shape(Point[] points)
    {
        // ...
    }
}
//
