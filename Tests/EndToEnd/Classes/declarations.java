-
class Point {
    Point(int x, int y) {
        // ...
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
-
