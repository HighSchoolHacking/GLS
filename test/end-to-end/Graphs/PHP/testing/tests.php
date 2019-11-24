<?php
require_once __DIR__ . '/../algorithms/depth_first_search.php';
require_once __DIR__ . '/../data/unweighted_node.php';
require_once __DIR__ . '/../data/weighted_node.php';

function testUnweighted() {
    $order = ["root", "apple", "banana", "red", "yellow"];
    $nodes = [];

    foreach ($order as $key) {
        $node = new UnweightedNode($key, $key);
        $nodes[$key] = $node;
    }

    $adjacencies = [
        "root" => ["apple", "banana"],
        "apple" => ["red", "yellow"],
        "banana" => ["yellow"],
        "red" => [],
        "yellow" => []
    ];

    foreach ($order as $key) {
        $node = $nodes[$key];
        $neighborKeys = $adjacencies[$key];

        foreach ($neighborKeys as $neighborKey) {
            $node->addNeighbor($nodes[$neighborKey]);
            echo sprintf("%s borders %s", $key, $neighborKey) . "\n";
        }
    }

    foreach (unweightedDepthFirstSearch($nodes["root"]) as $node) {
        echo $node->data . "\n";
    }
}

function testWeighted() {
    echo "Hello, world!" . "\n";
}
