require_relative "./album"

<?php

def print_ints(label, items)
    echo 'The first ' . label . ' is ' . items[0] . '.' . "\n";
    echo 'The last ' . label . ' is ' . items[items.length - 1] . '.' . "\n";

    for item in items
        echo '' . label . ': ' . item . '' . "\n";
    end

    for i in 0...items.length
        echo '' . label . ' ' . i . ': ' . items[i] . '' . "\n";
    end
end

def print_strings(label, items)
    echo 'The first ' . label . ' is ' . items[0] . '.' . "\n";
    echo 'The last ' . label . ' is ' . items[items.length - 1] . '.' . "\n";

    for item in items
        echo '' . label . ': ' . item . '' . "\n";
    end

    for i in 0...items.length
        echo '' . label . ' ' . i . ': ' . items[i] . '' . "\n";
    end
end

def print_list_fancy(label, items, getLabel)
    for item in items
        echo getLabel.call(item) . "\n";
    end

    for i in 0...items.length
        echo '' . label . ' ' . i . ': ' . getLabel.call(items[i]) . '' . "\n";
    end
end

# Initialization
$aaa
$bbb
$ccc

# Members
$fruits
echo 'There are ' . fruits.length . ' fruits.' . "\n";
echo 'The first fruit is ' . fruits[0] . '.' . "\n";

# Popping
$colors
colors.pop;
echo 'The last color is ' . colors[colors.length - 1] . '.' . "\n";

colors.shift;
echo 'The first color is ' . colors[0] . '.' . "\n";

# Pushing
$pets
pets.push("dog");
echo 'The last pet is ' . pets[pets.length - 1] . '.' . "\n";

# Splicing
pets.insert(0, "aardvark");
print_strings("pets", pets);
pets.insert(2, "canary");
print_strings("pets", pets);
pets.insert(5, "emu");
print_strings("pets", pets);

# Ranges
$all
print_strings("all pets", pets);
$lastFew
print_strings("last few pets", pets);

# Ranges by index
$indexAll
print_strings("all pets", pets);
$indexLastFew
print_strings("last few pets", pets);

# Ranges by length
$lengthAll
print_strings("all pets", pets);
$lengthLastFew
print_strings("last few pets", pets);

# Sorting strings
$flavors
flavors.sort!();
print_strings("flavor", flavors);

# Sorting ints
$ints
ints.sort!();
print_ints("int", ints);

# Sorting members
$albums
albums.sort_by! {|album| album.name};
print_list_fancy("album by name", albums, lambda { |album| album.name });
albums.sort_by! {|album| album.year};
print_list_fancy("album by year", albums, lambda { |album| album.get_label() });
