using namespace System.Collections.Generic

<#
An unweighted, undirected node in a graph.
#>
class UnweightedNode {
    $Contents;
    $neighborNodes;

    UnweightedNode($contents) {
        $this.Contents = $contents;
        $this.neighborNodes = [List[UnweightedNode]]::new();
    }

    [void] addNeighbor($node) {
        $this.neighborNodes.Add($node);
    }

    [List[UnweightedNode]] getNeighborsInOrder() {
        return $this.neighborNodes;
    }
}
