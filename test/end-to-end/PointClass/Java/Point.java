package pointclass;

public class Point {
    public Integer x;
    public Integer y;
    protected Integer vector;

    public Point(Integer x, Integer y) {
        this.x = x;
        this.y = y;
        this.vector = x * y;
    }
}
