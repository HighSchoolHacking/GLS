function Try-As-Double($doubleLike) {
    $asDouble = $null;
    if ([Double]::TryParse($doubleLike, [ref] $asDouble)) {
        Write-Output "It's a double: $([convert]::ToInt32($asDouble))";
    }
}

function Try-As-Int($firstIntLike, $secondIntLike) {
    $firstInt = $null;
    $secondInt = $null;
    if ([Int32]::TryParse($firstIntLike, [ref] $firstInt) -and [Int32]::TryParse($secondIntLike, [ref] $secondInt)) {
        Write-Output "Both are ints: $($firstInt) $($secondInt)";
    }
}
