using namespace System.Collections.Generic
. "./Vector.ps1"

$vector = [Vector]::new();
$words = @("hello", "my", "baby", "hello", "my", "darling", "hello", "my", "ragtime", "gal");

# Adding
foreach ($word in words)
{
    vector.push(word);
    Write-Output "First: $(vector.getFirst())";
    Write-Output "Last: $(vector.getLast())";
    Write-Output "Capacity: $(vector.getCapacity())";
    Write-Output "Length: $(vector.getLength())";
}

for ($i = 0; $i -lt 2; $i += 1) {
    # Retrieving
    for ($j = 0; $j -lt vector.getLength(); $j += 1) {
        Write-Output "At $(j): $(vector.at(j))";
    }

    # Capacity
    vector.ensureCapacity(10);
    Write-Output "Capacity: $(vector.getCapacity())";
    Write-Output "Length: $(vector.getLength())";

    # Resizing
    vector.resize(7);
    Write-Output "Capacity: $(vector.getCapacity())";
    Write-Output "Length: $(vector.getLength())";
}

# Sorting
$individuals = vector.toSet();
$sorted = list(individuals);
sorted.Sort();

foreach ($word in sorted)
{
    Write-Output "Set word: $(word)";
}
