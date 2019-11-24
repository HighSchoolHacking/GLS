<?php

/**
 * An unweighted, undirected node in a graph.
 */
class UnweightedNode {
    public $data;
    private $neighborNodes;

    function __construct($data) {
        $this->$data = $data;
        $this->$neighborNodes = [];
    }

    function addNeighbor($node) {
        array_push($this->$neighborNodes, $node);
    }

    function getNeighborsInOrder() {
        return $this->$neighborNodes;
    }
}
