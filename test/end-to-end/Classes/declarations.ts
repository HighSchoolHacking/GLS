//
class Point {
    public x: number;
    public y: number;
    protected square: number;
    private name: string;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.square = x * y;
        this.name = "";
    }
}

class Measurements<T> {
    public constructor(items: T[]) {
        // ...
    }
}

class Shape extends Measurements<Point> {
    public constructor(points: Point[]) {
        // ...
    }
}
//
