
##
# A weighted, directed node in a graph.
##
class WeightedNode
    attr_accessor :data
    attr_accessor :edges

    def initialize(data)
        self.data = data
        self.edges = []
    end

    def get_neighbors_in_order()
        nodes = []

        for edge in self.edges
            nodes.push(edge.to)
        end

        self.edges.sort!(lambda { |a, b| a.distance - b.distance.floor })

        return nodes
    end
end

