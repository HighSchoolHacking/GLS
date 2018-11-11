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
let container: { [i: string]: number } = {
    "bbb": 1,
    "ccc": 2,
    "ddd": 3
};

// Contains Key
let containsFalse: boolean = {}.hasOwnProperty.call(container, "aaa");

if (containsFalse) {
    console.log("wrong");
}

if ({}.hasOwnProperty.call(container, "bbb")) {
    console.log("contains bbb");
}

// Setting
container["aaa"] = 7;
console.log(container["aaa"]);
//
