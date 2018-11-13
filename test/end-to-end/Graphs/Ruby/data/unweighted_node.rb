#
class UnweightedNode
    attr_accessor :data
    attr_accessor :neighbors

    def initialize(data)
        self.data = data
        self.neighbors = []
    end
end
#
