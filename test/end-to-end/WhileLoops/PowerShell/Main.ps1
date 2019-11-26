while ($true)
{
    Write-Output "Near-infinite";
    break;
}

$count = 0;

while (count -lt 5)
{
    count += 1;

    if (count % 2 -eq 0) {
        continue;
    }

    Write-Output "count is $(count)";
}
