if ($true) {
    Write-Output "if true";
}

$second = $false;
if ($second) {
    Write-Output "wrong if variable";
} else {
    Write-Output "if false else";
}

if (1 + 1 -eq 3) {
    Write-Output "wrong if operation";
} elseif (2 + 2 -eq 3) {
    Write-Output "wrong else if";
} else {
    Write-Output "else if else";
}
