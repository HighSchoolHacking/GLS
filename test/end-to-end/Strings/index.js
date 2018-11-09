//
// Initialization
let haystack = "Hello, GLS!";
console.log(haystack);

// Concatenation
let joined = "It is -> " + haystack + " <- It was";
console.log(joined);

// Characters
let text = "abc";
let first = text[0];
console.log(`${text}'s first character is ${first}.`);

// Searching
let needle = "GLS";
let firstIndexOf = haystack.indexOf(needle);
let secondIndexOf = haystack.indexOf(needle, firstIndexOf + needle.length);

// Results
console.log(`Found a first result at: ${firstIndexOf}.`);

if (secondIndexOf !== -1) {
    console.log(`Found a second result at: ${secondIndexOf}.`);
}
//
