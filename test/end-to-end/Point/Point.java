//
package classes;

public class Point {
    public int x;
    public int y;
    protected int square;
    private String name;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
        this.square = x * y;
        this.name = "";
    }
}
//
