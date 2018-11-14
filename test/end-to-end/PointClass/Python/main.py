from named_point import NamedPoint
from point import Point

if __name__ == "__main__":
    point = Point(1, 2)

    print(point.x)
    print(point.y)

    named = NamedPoint(3, 4, "My Point")

    print(named.get_label())
