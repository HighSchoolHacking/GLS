<?php
require_once __DIR__ . '/../data/unweighted_node.php';
require_once __DIR__ . '/../data/weighted_node.php';

function unweightedDepthFirstSearch($start) {
    $nodes = [];
    $visitedIds = [];

    traverseUnweightedDepthFirstSearch($start, $nodes, $visitedIds);

    return $nodes;
}

function traverseUnweightedDepthFirstSearch($start, $nodes, $visitedIds) {
    array_push($nodes, $start);
    $visitedIds[$start->id] = 1;

    foreach ($start->getNeighborsInOrder() as $neighbor) {
        if (!array_key_exists($neighbor->id, $visitedIds)) {
            traverseUnweightedDepthFirstSearch($neighbor, $nodes, $visitedIds);
        }
    }
}

function weightedDepthFirstSearch($start) {
    $nodes = [];
    $visitedIdsIds = [];

    traverseWeightedDepthFirstSearch($start, $nodes, $visitedIdsIds);

    return $nodes;
}

function traverseWeightedDepthFirstSearch($start, $nodes, $visitedIds) {
    array_push($nodes, $start);
    $visitedIds[$start->id] = 1;

    foreach ($start->getNeighborsInOrder() as $node) {
        if (!array_key_exists($node, $visitedIds)) {
            traverseWeightedDepthFirstSearch($node, $nodes, $visitedIds);
        }
    }
}
