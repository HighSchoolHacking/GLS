// Initialization
let aaa = [];
let bbb = [1, 2, 3];
let ccc = [aaa, ["eee", "fff", "ggg"]];

// Members
let fruits = ["apple", "banana", "cherry"];
console.log(`There are ${fruits.length} fruits.`);
console.log(`The first fruit is ${fruits[0]}.`);

// Popping
let colors = ["red", "orange", "yellow", "green"];
colors.pop();
console.log(`The last color is ${colors[colors.length - 1]}.`);

colors.shift();
console.log(`The first color is ${colors[0]}.`);

// Pushing
let pets = ["bird", "cat"];
pets.push("dog");
console.log(`The last pet is ${pets[pets.length - 1]}.`);

// Sorting
let flavors = ["plain", "chocolate", "vanilla", "strawberry"];
flavors.sort();
console.log(`The first flavor is ${flavors[0]}.`);
console.log(`The last flavor is ${flavors[flavors.length - 1]}.`);

// Looping
for (let flavor of flavors) {
    console.log(`Flavor: ${flavor}.`);
}

for (let i = 0; i < flavors.length; i += 1) {
    console.log(`Flavor ${i}: ${flavors[i]}.`);
}

