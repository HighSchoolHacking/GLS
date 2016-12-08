-
class Point {
    public x;
    public y;
    protected square;
    private name;
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.square = x * y;
        this.name = "";
    }
}

class Measurements<T> {
    constructor(items) {
        // ...
    }
}

class Shape extends Measurements<Point> {
    constructor(points) {
        // ...
    }
}
-
