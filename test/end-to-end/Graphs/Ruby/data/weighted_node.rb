#
class WeightedNode
    attr_accessor :data
    attr_accessor :edges

    def initialize(data)
        self.data = data
        self.edges = []
    end
end
#
