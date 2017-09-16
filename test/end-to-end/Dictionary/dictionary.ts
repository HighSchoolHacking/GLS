//
// Dictionary types
let foo: { [i: string]: number } = {};
let bar: { [i: string]: { [i: string]: number } } = {};

// Indices
foo["baz"] = 7;
let qux: number = foo["baz"];

// In-place initialization
let aaa: { [i: string]: number } = {
    "bbb": 1,
    "ccc": 2,
    "ddd": 3
};
//
