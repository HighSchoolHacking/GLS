//
package pointclass;

import pointclass.point.Point;

public class NamedPoint extends Point {
    private String name;

    public NamedPoint(int x, int y, String name) {
        super(x, y);
        this.name = name;
    }

    public String getLabel() {
        return String.format("%0$s at [%1$d, %2$d] with vector %3$d", this.name, this.x, this.y, this.vector);
    }
}
//
