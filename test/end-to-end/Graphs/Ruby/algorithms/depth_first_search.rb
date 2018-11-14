require_relative "../data/unweighted_node"
require_relative "../data/weighted_node"
require "set"

def unweighted_depth_first_search(start)
    nodes = []
    visited = Set.new

    traverse_unweighted_depth_first_search(start, nodes, visited)

    return nodes
end

def traverse_unweighted_depth_first_search(start, nodes, visited)
    nodes.push(start)
    visited.add(start)

    for neighbor in start.get_neighbors_in_order()
        if !visited.include?(neighbor)
            traverse_unweighted_depth_first_search(neighbor, nodes, visited)
        end
    end
end

def weighted_depth_first_search(start)
    nodes = []
    visited = Set.new

    traverse_weighted_depth_first_search(start, nodes, visited)

    return nodes
end

def traverse_weighted_depth_first_search(start, nodes, visited)
    nodes.push(start)
    visited.add(start)

    for node in start.get_neighbors_in_order()
        if !visited.include?(node)
            traverse_weighted_depth_first_search(node, nodes, visited)
        end
    end
end

