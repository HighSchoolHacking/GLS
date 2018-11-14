from point import Point

class NamedPoint(Point):

    def __init__(self, x, y, name):
        super().__init__(x, y)
        self.__name = name

    def get_label(self):
        return "{0} at [{1}, {2}] with vector {3}".format(self.__name, self.x, self.y, self._vector)

