#
class Point
    attr_accessor: x
    attr_accessor: y
    attr_accessor: square
    attr_accessor: name

    def initialize(x, y)
        self.x = x
        self.y = y
        self.square = x * y
        self.name = ""
    end
end
#
