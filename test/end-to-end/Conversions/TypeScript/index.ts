import { tryAsDouble, tryAsInt } from "./Converters";

// Strings to numbers
let doubleLike: string = "3.5";
let doubleNotLike: string = "a3.5";
let intLike: string = "7";
let intNotLike: string = "a";

tryAsDouble(doubleLike);
tryAsDouble(doubleNotLike);
tryAsInt(intLike, "10");
tryAsInt(intNotLike, "fish");

