. "./../Algorithms/DepthFirstSearch.ps1"
. "./../Contents/UnweightedNode.ps1"
. "./../Contents/WeightedNode.ps1"

function Test-Unweighted() {
    $order = @("root", "apple", "banana", "red", "yellow");
    $nodes = @{};

    foreach ($key in $order)
    {
        $node = [UnweightedNode]::new($key);
        $nodes[$key] = $node;
    }

    $adjacencies = @{
        "root" = @("apple", "banana");
        "apple" = @("red", "yellow");
        "banana" = @("yellow");
        "red" = @();
        "yellow" = @();
    };

    foreach ($key in $order)
    {
        $node = $nodes[$key];
        $neighborKeys = $adjacencies[$key];

        foreach ($neighborKey in $neighborKeys)
        {
            $node.addNeighbor($nodes[$neighborKey]);
            Write-Output "$($key) borders $($neighborKey)";
        }
    }

    foreach ($node in Unweighted-Depth-First-Search $nodes["root"])
    {
        Write-Output $node.Contents;
    }
}

function Test-Weighted() {
    Write-Output "Hello, world!";
}
