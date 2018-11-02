//
// Types
let foo: { [i: string]: number } = {};
let bar: { [i: string]: { [i: string]: number } } = {};

// Indices
foo["baz"] = 7;
let qux: number = foo["baz"];
console.log(`baz is ${foo["baz"]}`);
console.log(`qux is ${qux}`);

// Initialization
let aaa: { [i: string]: number } = {
    "bbb": 1,
    "ccc": 2,
    "ddd": 3
};

// Contains Key
let containsFalse: boolean = {}.hasOwnProperty.call(aaa, "aaa");

if (containsFalse) {
    console.log("wrong");
}

if ({}.hasOwnProperty.call(aaa, "bbb")) {
    console.log("contains bbb");
}

// Pair Iteration
for (let key in aaa) {
    let value: number = aaa[key];
    console.log(`${key} has ${value}`);
}
//
