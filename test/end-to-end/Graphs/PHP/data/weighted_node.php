<?php

/**
 * A weighted, directed node in a graph.
 */
class WeightedNode {
    public $id;
    public $data;
    private $edges;

    function __construct($id, $data) {
        $this->id = $id;
        $this->data = $data;
        $this->edges = [];
    }

    function getNeighborsInOrder() {
        $nodes = [];

        foreach ($this->edges as $edge) {
            array_push($nodes, $edge->to);
        }

        usort($this->edges, function($edgeA, $edgeB) { return $edgeA->distance - $edgeB->distance; });

        return $nodes;
    }
}
