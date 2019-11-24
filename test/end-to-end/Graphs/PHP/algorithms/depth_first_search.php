<?php
require_once __DIR__ . '/../data/unweighted_node.php';
require_once __DIR__ . '/../data/weighted_node.php';

function unweightedDepthFirstSearch($start) {
    $nodes = [];
    $visited = [];

    traverseUnweightedDepthFirstSearch($start, $nodes, $visited);

    return $nodes;
}

function traverseUnweightedDepthFirstSearch($start, $nodes, $visited) {
    array_push($nodes, $start);
    $visited[spl_object_hash($start)] = 1;

    foreach ($start->getNeighborsInOrder() as $neighbor) {
        if (!array_key_exists(spl_object_hash($neighbor), $visited)) {
            traverseUnweightedDepthFirstSearch($neighbor, $nodes, $visited);
        }
    }
}

function weightedDepthFirstSearch($start) {
    $nodes = [];
    $visited = [];

    traverseWeightedDepthFirstSearch($start, $nodes, $visited);

    return $nodes;
}

function traverseWeightedDepthFirstSearch($start, $nodes, $visited) {
    array_push($nodes, $start);
    $visited[spl_object_hash($start)] = 1;

    foreach ($start->getNeighborsInOrder() as $node) {
        if (!array_key_exists(spl_object_hash($node), $visited)) {
            traverseWeightedDepthFirstSearch($node, $nodes, $visited);
        }
    }
}
