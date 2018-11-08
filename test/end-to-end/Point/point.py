#
class Point:

    def __init__(self, x, y):
        self.x = x
        self.y = y
        self._square = x * y
        self.__name = ""
#
