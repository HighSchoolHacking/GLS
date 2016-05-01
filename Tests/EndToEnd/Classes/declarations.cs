-
class Point
{
    Point(int x, int y)
    {
        // ...
    }
}

class Measurements<T>
{
    Measurements(T[] items)
    {
        // ...
    }
}

class Shape : Measurements<Point>
{
    Shape(Point[] points)
    {
        // ...
    }
}
-
