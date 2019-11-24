require_relative "./vector"
require "set"

<?php

$vector
$words

# Adding
for word in words
    vector.push(word);
    echo 'First: ' . vector.get_first() . '' . "\n";
    echo 'Last: ' . vector.get_last() . '' . "\n";
    echo 'Capacity: ' . vector.get_capacity() . '' . "\n";
    echo 'Length: ' . vector.get_length() . '' . "\n";
end

for i in 0...2
    # Retrieving
    for j in 0...vector.get_length()
        echo 'At ' . j . ': ' . vector.at(j) . '' . "\n";
    end

    # Capacity
    vector.ensure_capacity(10);
    echo 'Capacity: ' . vector.get_capacity() . '' . "\n";
    echo 'Length: ' . vector.get_length() . '' . "\n";

    # Resizing
    vector.resize(7);
    echo 'Capacity: ' . vector.get_capacity() . '' . "\n";
    echo 'Length: ' . vector.get_length() . '' . "\n";
end

# Sorting
$individuals
$sorted
sorted.sort!();

for word in sorted
    echo 'Set word: ' . word . '' . "\n";
end
