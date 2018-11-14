// Types
let foo = {};
let bar = {};

// Indices
foo["baz"] = 7;
let qux = foo["baz"];
console.log(`baz is ${foo["baz"]}`);
console.log(`qux is ${qux}`);

// Initialization
let container = {
    "bbb": 1,
    "ccc": 2,
    "ddd": 3
};

// Contains Key
let containsFalse = {}.hasOwnProperty.call(container, "aaa");

if (containsFalse) {
    console.log("wrong");
}

if ({}.hasOwnProperty.call(container, "bbb")) {
    console.log("contains bbb");
}

// Setting
container["aaa"] = 7;
console.log(container["aaa"]);

