#
require_relative "._./data/unweighted_node"
require_relative "._./data/weighted_node"
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

    for neighbor in start.neighbors
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

    for edge in start.edges
        if !visited.include?(edge.from)
            traverse_weighted_depth_first_search(edge.from, nodes, visited)
        end

        if !visited.include?(edge.to)
            traverse_weighted_depth_first_search(edge.to, nodes, visited)
        end
    end
end
#
