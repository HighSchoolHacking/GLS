. "./../Data/UnweightedNode.ps1"
. "./../Data/WeightedNode.ps1"

function Unweighted-Depth-First-Search($start) {
    $nodes = @();
    $visited = setundefinedUnweightedNodeundefined();

    Traverse-Unweighted-Depth-First-Search start nodes visited;

    return nodes;
}

function Traverse-Unweighted-Depth-First-Search($start, $nodes, $visited) {
    nodes.append(start);
    visited.add(start);

    foreach (neighbor in start.getNeighborsInOrder())
    {
        if (not neighbor in visited) {
            Traverse-Unweighted-Depth-First-Search neighbor nodes visited;
        }
    }
}

function Weighted-Depth-First-Search($start) {
    $nodes = @();
    $visited = setundefinedWeightedNodeundefined();

    Traverse-Weighted-Depth-First-Search start nodes visited;

    return nodes;
}

function Traverse-Weighted-Depth-First-Search($start, $nodes, $visited) {
    nodes.append(start);
    visited.add(start);

    foreach (node in start.getNeighborsInOrder())
    {
        if (not node in visited) {
            Traverse-Weighted-Depth-First-Search node nodes visited;
        }
    }
}
