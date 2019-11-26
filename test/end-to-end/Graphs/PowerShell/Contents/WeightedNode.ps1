using namespace System.Collections.Generic
. "./Edge.ps1"
. "./WeightedNode.ps1"

<#
A weighted, directed node in a graph.
#>
class WeightedNode {
    $Contents;
    $edges;

    WeightedNode($contents) {
        $this.Contents = $contents;
        $this.edges = [List[Edge]]::new();
    }

    [List[WeightedNode]] getNeighborsInOrder() {
        $nodes = [List[WeightedNode]]::new();

        foreach ($edge in $this.edges)
        {
            $nodes.Add($edge.To);
        }

        $this.edges = $this.edges | Sort-Object -Property Distance;

        return $nodes;
    }
}
