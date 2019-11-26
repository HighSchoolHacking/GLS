. "./NamedPoint.ps1"
. "./Point.ps1"

$point = [Point]::new(1, 2);

Write-Output $Point;
Write-Output $Point;

$named = [NamedPoint]::new(3, 4, "My Point");

Write-Output named.getLabel();
