-
class Point {
    constructor(x: number, y: number) {
        // ...
    }
}

class Measurements<T> {
    constructor(items: T[]) {
        // ...
    }
}

class Shape extends Measurements<Point> {
    constructor(points: Point[]) {
        // ...
    }
}
-
