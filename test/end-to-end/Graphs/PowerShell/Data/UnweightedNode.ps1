
<#
An unweighted, undirected node in a graph.
#>
class UnweightedNode {
    $Data;
    $neighborNodes;

    UnweightedNode(data) {
        $this.Data = data;
        $this.neighborNodes = @();
    }

    [void] addNeighbor($node) {
        $$this.append(node);
    }

    [UnweightedNode[]] getNeighborsInOrder() {
        return $$this;
    }
}
