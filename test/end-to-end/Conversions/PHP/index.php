<?php
require __DIR__ . './converters.php';

# Strings to numbers
$doubleLike = "3.5";
$doubleNotLike = "a3.5";
$intLike = "7";
$intNotLike = "a";

tryAsDouble($doubleLike);
tryAsDouble($doubleNotLike);
tryAsInt($intLike, "10");
tryAsInt($intNotLike, "fish");
