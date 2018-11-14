const { tryAsDouble, tryAsInt } = require("./Converters");

// Strings to numbers
let doubleLike = "3.5";
let doubleNotLike = "a3.5";
let intLike = "7";
let intNotLike = "a";

tryAsDouble(doubleLike);
tryAsDouble(doubleNotLike);
tryAsInt(intLike, "10");
tryAsInt(intNotLike, "fish");
