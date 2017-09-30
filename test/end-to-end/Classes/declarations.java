//
class Point {
    public int x;
    public int y;
    protected int square;
    private string name;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
        this.square = x * y;
        this.name = "";
    }
}

class Measurements<T> {
    public Measurements(T[] items) {
        // ...
    }
}

class Shape extends Measurements<Point> {
    public Shape(Point[] points) {
        // ...
    }
}
//
