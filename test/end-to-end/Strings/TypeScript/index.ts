// Initialization
let haystack: string = "Hello, Budgie!";
console.log(haystack);

// Concatenation
let joined: string = "It is -> " + haystack + " <- It was";
console.log(joined);

// Characters
let text: string = "abc";
let first: string = text[0];
console.log(`${text}'s first character is ${first}.`);

// Searching
let needle: string = "Budgie";
let firstIndexOf: number = haystack.indexOf(needle);
let secondIndexOf: number = haystack.indexOf(needle, firstIndexOf + needle.length);

// Results
console.log(`Found a first result at: ${firstIndexOf}.`);

if (secondIndexOf !== -1) {
    console.log(`Found a second result at: ${secondIndexOf}.`);
}
