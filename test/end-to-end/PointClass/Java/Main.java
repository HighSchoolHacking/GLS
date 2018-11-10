//
package pointclass;

import pointclass.namedpoint.NamedPoint;
import pointclass.point.Point;

class Index {
    public static void main(String[] args) {
        Point point = new Point(1, 2);

        System.out.println(point.x);
        System.out.println(point.y);

        NamedPoint named = new NamedPoint(3, 4, "My Point");

        System.out.println(named.getLabel());
    }
}
//
