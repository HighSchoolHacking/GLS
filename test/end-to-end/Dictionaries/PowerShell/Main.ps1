# Types
$foo = @{};
$bar = @{};

# Indices
$foo["baz"] = 7;
$qux = $foo["baz"];
Write-Output "baz is $($foo["baz"])";
Write-Output "qux is $($qux)";

# Initialization
$container = @{
    "bbb" = 1;
    "ccc" = 2;
    "ddd" = 3;
};

# Contains Key
$containsFalse = $container.ContainsKey("aaa");

if ($containsFalse) {
    Write-Output "wrong";
}

if ($container.ContainsKey("bbb")) {
    Write-Output "contains bbb";
}

# Setting
$container["aaa"] = 7;
Write-Output $container["aaa"];
