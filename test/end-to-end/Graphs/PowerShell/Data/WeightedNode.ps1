
<#
A weighted, directed node in a graph.
#>
class WeightedNode {
    $Data;
    $edges;

    WeightedNode(data) {
        $this.Data = data;
        $this.edges = @();
    }

    [WeightedNode[]] getNeighborsInOrder() {
        $nodes = @();

        foreach (edge in $$this)
        {
            nodes.append($Edge);
        }

        $$this.sort(key = lambda edge: edge.Distance);

        return nodes;
    }
}
