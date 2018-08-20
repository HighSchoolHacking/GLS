//
// Initialization
let haystack: string = "Hello, GLS!";

// Searching
let needle: string = "GLS";
let firstIndexOf: number = haystack.indexOf(needle);
let secondIndexOf: number = haystack.indexOf(needle, firstIndexOf + needle.length);

// Results
console.log(`Found a first result at: ${firstIndexOf}.`);

if (secondIndexOf !== -1) {
    console.log(`Found a second result at: ${secondIndexOf}.`);
}
//
