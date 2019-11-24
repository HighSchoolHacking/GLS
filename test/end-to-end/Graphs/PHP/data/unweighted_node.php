<?php

/**
 * An unweighted, undirected node in a graph.
 */
class UnweightedNode {
    public $id;
    public $data;
    private $neighborNodes;

    function __construct($id, $data) {
        $this->id = $id;
        $this->data = $data;
        $this->neighborNodes = [];
    }

    function addNeighbor($node) {
        array_push($this->neighborNodes, $node);
    }

    function getNeighborsInOrder() {
        return $this->neighborNodes;
    }
}
