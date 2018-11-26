package pointclass;

import pointclass.Point;

public class NamedPoint extends Point {
    private String name;

    public NamedPoint(Integer x, Integer y, String name) {
        super(x, y);
        this.name = name;
    }

    public String getLabel() {
        return String.format("%s at [%d, %d] with vector %d", this.name, this.x, this.y, this.vector);
    }
}
