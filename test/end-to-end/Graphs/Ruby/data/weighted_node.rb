
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

        self.edges.sort_by! {|edge| edge.distance}

        return nodes
    end
end
