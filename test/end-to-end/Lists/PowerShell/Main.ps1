using namespace System.Collections.Generic
. "./Album.ps1"

function Print-Ints($label, $items) {
    Write-Output "The first $($label) is $($items[0]).";
    Write-Output "The last $($label) is $($items[$items.Count - 1]).";

    foreach ($item in $items)
    {
        Write-Output "$($label): $($item)";
    }

    for ($i = 0; $i -lt $items.Count; $i += 1) {
        Write-Output "$($label) $($i): $($items[$i])";
    }
}

function Print-Strings($label, $items) {
    Write-Output "The first $($label) is $($items[0]).";
    Write-Output "The last $($label) is $($items[$items.Count - 1]).";

    foreach ($item in $items)
    {
        Write-Output "$($label): $($item)";
    }

    for ($i = 0; $i -lt $items.Count; $i += 1) {
        Write-Output "$($label) $($i): $($items[$i])";
    }
}

function Print-List-Fancy($label, $items, $getLabel) {
    foreach ($item in $items)
    {
        Write-Output $getLabel.Invoke($item);
    }

    for ($i = 0; $i -lt $items.Count; $i += 1) {
        Write-Output "$($label) $($i): $($getLabel.Invoke($items[$i]))";
    }
}

# Initialization
$aaa = [List[string]]::new();
$bbb = [List[int]]@(1, 2, 3);
$ccc = [List[List[string]]]@($aaa, [List[string]]@("eee", "fff", "ggg"));

# Members
$fruits = [List[string]]@("apple", "banana", "cherry");
Write-Output "There are $($fruits.Count) fruits.";
Write-Output "The first fruit is $($fruits[0]).";

# Popping
$colors = [List[string]]@("red", "orange", "yellow", "green");
$colors.RemoveAt($colors.Count - 1);
Write-Output "The last color is $($colors[$colors.Count - 1]).";

$colors.RemoveAt(0);
Write-Output "The first color is $($colors[0]).";

# Pushing
$pets = [List[string]]@("bird", "cat");
$pets.Add("dog");
Write-Output "The last pet is $($pets[$pets.Count - 1]).";

# Splicing
$pets.Insert(0, "aardvark");
Print-Strings "pets" $pets;
$pets.Insert(2, "canary");
Print-Strings "pets" $pets;
$pets.Insert(5, "emu");
Print-Strings "pets" $pets;

# Ranges
$all = $pets.GetRange(0, $pets.Count);
Print-Strings "all pets" $pets;
$lastFew = $pets.GetRange(3, $pets.Count - 3);
Print-Strings "last few pets" $pets;

# Ranges by index
$indexAll = $pets.GetRange(0, 3);
Print-Strings "all pets" $pets;
$indexLastFew = $pets.GetRange(1, 2);
Print-Strings "last few pets" $pets;

# Ranges by length
$lengthAll = $pets.GetRange(0, 3);
Print-Strings "all pets" $pets;
$lengthLastFew = $pets.GetRange(1, 3);
Print-Strings "last few pets" $pets;

# Sorting strings
$flavors = [List[string]]@("plain", "chocolate", "vanilla", "strawberry");
$flavors.Sort();
Print-Strings "flavor" $flavors;

# Sorting ints
$ints = [List[int]]@(1, 10, 2, -3, 8, 4, 5);
$ints.Sort();
Print-Ints "int" $ints;

# Sorting members
$albums = [List[Album]]@([Album]::new("Thriller", 1982), [Album]::new("Back in Black", 1980), [Album]::new("The Dark Side of the Moon", 1973));
$albums = $albums | Sort-Object -Property Name;
Print-List-Fancy "album by name" $albums { param ($album) $album.Name };
$albums = $albums | Sort-Object -Property Year;
Print-List-Fancy "album by year" $albums { param ($album) $album.getLabel() };
