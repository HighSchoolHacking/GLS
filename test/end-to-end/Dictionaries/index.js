//
// Types
let foo = {};
let bar = {};

// Indices
foo["baz"] = 7;
let qux = foo["baz"];
console.log(`baz is ${foo["baz"]}`);
console.log(`qux is ${qux}`);

// Initialization
let aaa = {
    "bbb": 1,
    "ccc": 2,
    "ddd": 3
};

// Contains Key
let containsFalse = {}.hasOwnProperty.call(aaa, "aaa");

if (containsFalse) {
    console.log("wrong");
}

if ({}.hasOwnProperty.call(aaa, "bbb")) {
    console.log("contains bbb");
}

// Pair Iteration
for (let key in aaa) {
    let value = aaa[key];
    console.log(`${key} has ${value}`);
}
//
