//
class Point {
    public int x;
    public int y;
    protected int square;
    private string name;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
        this.square = x * y;
        this.name = "";
    }
}

class Measurements<T> {
    Measurements(T[] items) {
        // ...
    }
}

class Shape extends Measurements<Point> {
    Shape(Point[] points) {
        // ...
    }
}
//
