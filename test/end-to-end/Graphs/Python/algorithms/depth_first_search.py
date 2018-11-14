from data.unweighted_node import UnweightedNode
from data.weighted_node import WeightedNode

def unweighted_depth_first_search(start):
    nodes = []
    visited = set()

    traverse_unweighted_depth_first_search(start, nodes, visited)

    return nodes

def traverse_unweighted_depth_first_search(start, nodes, visited):
    nodes.append(start)
    visited.add(start)

    for neighbor in start.get_neighbors_in_order():
        if not neighbor in visited:
            traverse_unweighted_depth_first_search(neighbor, nodes, visited)

def weighted_depth_first_search(start):
    nodes = []
    visited = set()

    traverse_weighted_depth_first_search(start, nodes, visited)

    return nodes

def traverse_weighted_depth_first_search(start, nodes, visited):
    nodes.append(start)
    visited.add(start)

    for node in start.get_neighbors_in_order():
        if not node in visited:
            traverse_weighted_depth_first_search(node, nodes, visited)

