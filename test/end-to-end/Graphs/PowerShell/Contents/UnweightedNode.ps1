
<#
An unweighted, undirected node in a graph.
#>
class UnweightedNode {
    $Contents;
    $neighborNodes;

    UnweightedNode($contents) {
        $this.Contents = $contents;
        $this.neighborNodes = New-Object System.Collections.Generic.List[UnweightedNode];
    }

    [void] addNeighbor($node) {
        $this.neighborNodes.Add($node);
    }

    [System.Collections.Generic.List[UnweightedNode]] getNeighborsInOrder() {
        return $this.neighborNodes;
    }
}
