# Initialization
$aaa = @();
$bbb = @(1, 2, 3);
$ccc = @($aaa, @("eee", "fff", "ggg"));

# Members
$fruits = @("apple", "banana", "cherry");
Write-Output "The first fruit is $($fruits[0]).";

# Length
Write-Output "There are $($fruits.length) fruits.";
