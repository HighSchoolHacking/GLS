. "./../Contents/UnweightedNode.ps1"
. "./../Contents/WeightedNode.ps1"

# New-Object System.Collections.Generic.HashSet[UnweightedNode]
# New-Object System.Collections.Generic.HashSet[lolskies]
# UnweightedNode

function Unweighted-Depth-First-Search($start) {
    $nodes = New-Object System.Collections.Generic.List[UnweightedNode];
    $visited = New-Object System.Collections.Generic.HashSet[UnweightedNode];

    Traverse-Unweighted-Depth-First-Search $start $nodes $visited;

    return $nodes;
}

function Traverse-Unweighted-Depth-First-Search($start, $nodes, $visited) {
    $nodes.Add($start);
    $visited.add($start);

    foreach ($neighbor in $start.getNeighborsInOrder())
    {
        if (-not $visited.Contains($neighbor)) {
            Traverse-Unweighted-Depth-First-Search $neighbor $nodes $visited;
        }
    }
}

function Weighted-Depth-First-Search($start) {
    $nodes = New-Object System.Collections.Generic.List[WeightedNode];
    $visited = New-Object System.Collections.Generic.HashSet[WeightedNode];

    Traverse-Weighted-Depth-First-Search $start $nodes $visited;

    return $nodes;
}

function Traverse-Weighted-Depth-First-Search($start, $nodes, $visited) {
    $nodes.Add($start);
    $visited.add($start);

    foreach ($node in $start.getNeighborsInOrder())
    {
        if (-not $visited.Contains($node)) {
            Traverse-Weighted-Depth-First-Search $node $nodes $visited;
        }
    }
}
