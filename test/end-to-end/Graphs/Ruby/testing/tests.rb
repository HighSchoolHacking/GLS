require_relative "../algorithms/depth_first_search"
require_relative "../data/unweighted_node"
require_relative "../data/weighted_node"

def test_unweighted()
    order = ["root", "apple", "banana", "red", "yellow"]
    nodes = {}

    for key in order
        node = UnweightedNode.new(key)
        nodes[key] = node
    end

    adjacencies = {
        "root" => ["apple", "banana"],
        "apple" => ["red", "yellow"],
        "banana" => ["yellow"],
        "red" => [],
        "yellow" => []
    }

    for key in order
        node = nodes[key]
        neighborKeys = adjacencies[key]

        for neighborKey in neighborKeys
            node.add_neighbor(nodes[neighborKey])
            puts "%s borders %s" % [key, neighborKey]
        end
    end

    for node in unweighted_depth_first_search(nodes["root"])
        puts node.data
    end
end

def test_weighted()
    puts "Hello, world!"
end
