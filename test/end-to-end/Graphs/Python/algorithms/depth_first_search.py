#
from ._..data.unweighted_node import UnweightedNode
from ._..data.weighted_node import WeightedNode

def unweighted_depth_first_search(start):
    nodes = []
    visited = set()

    traverse_unweighted_depth_first_search(start, nodes, visited)

    return nodes

def traverse_unweighted_depth_first_search(start, nodes, visited):
    nodes.append(start)
    visited.add(start)

    for neighbor in start.neighbors:
        if !neighbor in visited:
            traverse_unweighted_depth_first_search(neighbor, nodes, visited)

def weighted_depth_first_search(start):
    nodes = []
    visited = set()

    traverse_weighted_depth_first_search(start, nodes, visited)

    return nodes

def traverse_weighted_depth_first_search(start, nodes, visited):
    nodes.append(start)
    visited.add(start)

    for edge in start.edges:
        if !edge.from in visited:
            traverse_weighted_depth_first_search(edge.from, nodes, visited)

        if !edge.to in visited:
            traverse_weighted_depth_first_search(edge.to, nodes, visited)
#
