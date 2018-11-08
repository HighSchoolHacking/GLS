//
// Initialization
let haystack = "Hello, GLS!";

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
