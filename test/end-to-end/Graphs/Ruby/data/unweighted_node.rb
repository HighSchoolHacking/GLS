
##
# An unweighted, undirected node in a graph.
##
class UnweightedNode
    attr_accessor :data
    attr_accessor :neighborNodes

    def initialize(data)
        self.data = data
        self.neighborNodes = []
    end

    def add_neighbor(node)
        self.neighborNodes.push(node)
    end

    def get_neighbors_in_order()
        return self.neighborNodes
    end
end

