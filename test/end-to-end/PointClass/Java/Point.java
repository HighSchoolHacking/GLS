package pointclass;

public class Point {
    public int x;
    public int y;
    protected int vector;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
        this.vector = x * y;
    }
}

