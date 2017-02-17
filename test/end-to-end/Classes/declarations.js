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

class Measurements {
    constructor(items) {
        // ...
    }
}

class Shape extends Measurements {
    constructor(points) {
        // ...
    }
}
-
