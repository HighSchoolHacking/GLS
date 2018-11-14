from math import floor

"""
A weighted, directed node in a graph.
"""
class WeightedNode:

    def __init__(self, data):
        self.data = data
        self.__edges = []

    def get_neighbors_in_order(self):
        nodes = []

        for edge in self.__edges:
            nodes.append(edge.to)

        self.__edges.sort(lambda a, b: floor(a.distance - b.distance))

        return nodes

