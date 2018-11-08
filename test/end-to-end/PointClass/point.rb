#
class Point
    attr_accessor :x
    attr_accessor :y
    attr_accessor :vector

    def initialize(x, y)
        self.x = x
        self.y = y
        self.vector = x * y
    end
end
#
