. "./Album.ps1"

function Print-Ints($label, $items) {
    Write-Output "The first $(label) is $(items[0]).";
    Write-Output "The last $(label) is $(items[Length(items) - 1]).";

    foreach ($item in items)
    {
        Write-Output "$(label): $(item)";
    }

    for ($i = 0; $i -lt Length(items); $i += 1) {
        Write-Output "$(label) $(i): $(items[i])";
    }
}

function Print-Strings($label, $items) {
    Write-Output "The first $(label) is $(items[0]).";
    Write-Output "The last $(label) is $(items[Length(items) - 1]).";

    foreach ($item in items)
    {
        Write-Output "$(label): $(item)";
    }

    for ($i = 0; $i -lt Length(items); $i += 1) {
        Write-Output "$(label) $(i): $(items[i])";
    }
}

function Print-List-Fancy($label, $items, $getLabel) {
    foreach ($item in items)
    {
        Write-Output getLabel(item);
    }

    for ($i = 0; $i -lt Length(items); $i += 1) {
        Write-Output "$(label) $(i): $(getLabel(items[i]))";
    }
}

# Initialization
$aaa = New-Object System.Collections.Generic.List[string];
$bbb = New-Object System.Collections.Generic.List[int]undefinedundefined1undefinedundefined2undefinedundefined3undefinedundefined;
$ccc = New-Object System.Collections.Generic.List[System.Collections.Generic.List[string]]undefinedundefinedaaaundefinedundefinedNew-Object System.Collections.Generic.List[string]undefinedundefined"eee"undefinedundefined"fff"undefinedundefined"ggg"undefinedundefinedundefinedundefined;

# Members
$fruits = New-Object System.Collections.Generic.List[string]undefinedundefined"apple"undefinedundefined"banana"undefinedundefined"cherry"undefinedundefined;
Write-Output "There are $(Length(fruits)) fruits.";
Write-Output "The first fruit is $(fruits[0]).";

# Popping
$colors = New-Object System.Collections.Generic.List[string]undefinedundefined"red"undefinedundefined"orange"undefinedundefined"yellow"undefinedundefined"green"undefinedundefined;
colors.Pop();
Write-Output "The last color is $(colors[Length(colors) - 1]).";

colors.Pop(0);
Write-Output "The first color is $(colors[0]).";

# Pushing
$pets = New-Object System.Collections.Generic.List[string]undefinedundefined"bird"undefinedundefined"cat"undefinedundefined;
pets.Add("dog");
Write-Output "The last pet is $(pets[Length(pets) - 1]).";

# Splicing
pets.Insert(0, "aardvark");
Print-Strings "pets" pets;
pets.Insert(2, "canary");
Print-Strings "pets" pets;
pets.Insert(5, "emu");
Print-Strings "pets" pets;

# Ranges
$all = pets[:];
Print-Strings "all pets" pets;
$lastFew = pets[3:];
Print-Strings "last few pets" pets;

# Ranges by index
$indexAll = pets[0:3];
Print-Strings "all pets" pets;
$indexLastFew = pets[1:3];
Print-Strings "last few pets" pets;

# Ranges by length
$lengthAll = pets[0:3];
Print-Strings "all pets" pets;
$lengthLastFew = pets[1:4];
Print-Strings "last few pets" pets;

# Sorting strings
$flavors = New-Object System.Collections.Generic.List[string]undefinedundefined"plain"undefinedundefined"chocolate"undefinedundefined"vanilla"undefinedundefined"strawberry"undefinedundefined;
flavors.Sort();
Print-Strings "flavor" flavors;

# Sorting ints
$ints = New-Object System.Collections.Generic.List[int]undefinedundefined1undefinedundefined10undefinedundefined2undefinedundefined-3undefinedundefined8undefinedundefined4undefinedundefined5undefinedundefined;
ints.Sort();
Print-Ints "int" ints;

# Sorting members
$albums = New-Object System.Collections.Generic.List[Album]undefinedundefined[Album]::new("Thriller", 1982)undefinedundefined[Album]::new("Back in Black", 1980)undefinedundefined[Album]::new("The Dark Side of the Moon", 1973)undefinedundefined;
albums.sort(key = lambda albums: Name);
Print-List-Fancy "album by name" albums lambda album: $Album;
albums = albums | Sort-Object -Property Year;
Print-List-Fancy "album by year" albums lambda album: album.getLabel();
