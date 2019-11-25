. "./Converters.ps1"

# Strings to numbers
$doubleLike = "3.4";
$doubleNotLike = "a3.4";
$intLike = "7";
$intNotLike = "a";

Try-As-Double $doubleLike;
Try-As-Double $doubleNotLike;
Try-As-Int $intLike "10";
Try-As-Int $intNotLike "fish";
