#
require_relative "._./algorithms/depth_first_search"
require_relative "._./data/unweighted_node"
require_relative "._./data/weighted_node"

def test_unweighted()
    adjacencies = {
        "root" => ["apple", "banana"],
        "apple" => ["red", "yellow"],
        "banana" => ["yellow"],
        "red" => [],
        "yellow" => []
    }
    nodes = {}

    adjacencies.each_key { |key|
        node = UnweightedNode.new(key)
        nodes[key] = node
    }

    adjacencies.each { |key, neighborKeys|
        node = nodes[key]

        for neighborKey in neighborKeys
            node.neighbors.push(nodes[neighborKey])
            puts "%s borders %s" % [key, neighborKey]
        end
    }

    for node in unweighted_depth_first_search(nodes["root"])
        puts node.data
    end
end

def test_weighted()
end
#
