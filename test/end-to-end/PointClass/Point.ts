//
export class Point {
    public x: number;
    public y: number;
    protected vector: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vector = x * y;
    }
}
//
