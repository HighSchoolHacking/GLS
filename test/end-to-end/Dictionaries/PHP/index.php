<?php
# Types
$foo = [];
$bar = [];

# Indices
$foo["baz"] = 7;
$qux = $foo["baz"];
echo 'baz is ' . $foo["baz"] . '' . "\n";
echo 'qux is ' . $qux . '' . "\n";

# Initialization
$container = [
    "bbb" => 1,
    "ccc" => 2,
    "ddd" => 3
];

# Contains Key
$containsFalse = array_key_exists("aaa", $container);

if ($containsFalse) {
    echo "wrong" . "\n";
}

if (array_key_exists("bbb", $container)) {
    echo "contains bbb" . "\n";
}

# Setting
$container["aaa"] = 7;
echo $container["aaa"] . "\n";
