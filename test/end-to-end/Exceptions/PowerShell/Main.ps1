try {
    throw new Exception("Oh no!");
}
catch (Exception error) {
    Write-Output "Found an error.";
}
finally {
    # ...
}
