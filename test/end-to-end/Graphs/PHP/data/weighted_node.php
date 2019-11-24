<?php

/**
 * A weighted, directed node in a graph.
 */
class WeightedNode {
    public $data;
    private $edges;

    function __construct($data) {
        $this->$data = $data;
        $this->$edges = [];
    }

    function getNeighborsInOrder() {
        $nodes = [];

        foreach ($this->$edges as $edge) {
            array_push($nodes, $edge->$to);
        }

        usort($this->$edges, function($edgeA, $edgeB) { return $edgeA->$distance - $edgeB->$distance; });

        return $nodes;
    }
}
