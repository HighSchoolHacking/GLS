
"""
An unweighted, undirected node in a graph.
"""
class UnweightedNode:

    def __init__(self, data):
        self.data = data
        self.__neighbor_nodes = []

    def add_neighbor(self, node):
        self.__neighbor_nodes.append(node)

    def get_neighbors_in_order(self):
        return self.__neighbor_nodes
