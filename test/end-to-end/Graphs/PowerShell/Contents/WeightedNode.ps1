
<#
A weighted, directed node in a graph.
#>
class WeightedNode {
    $Contents;
    $edges;

    WeightedNode($contents) {
        $this.Contents = $contents;
        $this.edges = New-Object System.Collections.Generic.List[Edge];
    }

    [System.Collections.Generic.List[WeightedNode]] getNeighborsInOrder() {
        $nodes = New-Object System.Collections.Generic.List[WeightedNode];

        foreach ($edge in $this.edges)
        {
            $nodes.Add($edge.To);
        }

        $this.edges = $this.edges | Sort-Object -Property Distance;

        return $nodes;
    }
}
