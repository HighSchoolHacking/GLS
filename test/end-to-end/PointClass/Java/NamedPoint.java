package pointclass;

import pointclass.Point;

public class NamedPoint extends Point {
    private String name;

    public NamedPoint(Integer x, Integer y, String name) {
        super(x, y);
        this.name = name;
    }

    public String getLabel() {
        return String.format("%0$s at [%1$d, %2$d] with vector %3$d", this.name, this.x, this.y, this.vector);
    }
}
