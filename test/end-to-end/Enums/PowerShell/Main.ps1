. "./Direction.ps1"

function Print-Value($direction) {
    if ($direction -eq ([Direction]::Horizontal)) {
        Write-Output "Horizontal.";
    } elseif ($direction -eq ([Direction]::Vertical)) {
        Write-Output "Vertical.";
    } else {
        Write-Output "Unknown...";
    }
}

Print-Value ([Direction]::Unknown);
Print-Value ([Direction]::Horizontal);
Print-Value ([Direction]::Vertical);

$direction = ([Direction]::Unknown);
Print-Value $direction;
