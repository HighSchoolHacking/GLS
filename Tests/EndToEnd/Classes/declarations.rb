-
class Point
    
    def initialize(x, y)
        self.x = x
        self.y = y
        self.square = x * y
        self.name = ""
    end
end

class Measurements
    def initialize(items)
        # ...
    end
end

class Shape < Measurements
    def initialize(points)
        # ...
    end
end
-
