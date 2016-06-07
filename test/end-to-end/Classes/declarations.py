-
class Point:
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self._square = x * y
        self.__name = ""

class Measurements:
    def __init__(self, items):
        # ...

class Shape(Measurements):
    def __init__(self, points):
        # ...
-
