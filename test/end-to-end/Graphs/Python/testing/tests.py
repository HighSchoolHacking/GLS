from algorithms.depth_first_search import unweighted_depth_first_search, weighted_depth_first_search
from data.unweighted_node import UnweightedNode
from data.weighted_node import WeightedNode

def test_unweighted():
    adjacencies = {
        "root": ["apple", "banana"],
        "apple": ["red", "yellow"],
        "banana": ["yellow"],
        "red": [],
        "yellow": []
    }
    nodes = {}

    for key in adjacencies:
        node = UnweightedNode(key)
        nodes[key] = node

    for key, neighborKeys in adjacencies.items():
        node = nodes[key]

        for neighborKey in neighborKeys:
            node.add_neighbor(nodes[neighborKey])
            print("{0} borders {1}".format(key, neighborKey))

    for node in unweighted_depth_first_search(nodes["root"]):
        print(node.data)

def test_weighted():
    print("Hello, world!")

