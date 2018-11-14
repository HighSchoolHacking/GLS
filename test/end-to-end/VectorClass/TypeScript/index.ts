import { Vector } from "./Vector";

let vector: Vector<string> = new Vector<string>();
let words: string[] = ["hello", "my", "baby", "hello", "my", "darling", "hello", "my", "ragtime", "gal"];

// Adding
for (let word of words) {
    vector.push(word);
    console.log(`First: ${vector.getFirst()}`);
    console.log(`Last: ${vector.getLast()}`);
    console.log(`Capacity: ${vector.getCapacity()}`);
    console.log(`Length: ${vector.getLength()}`);
}

for (let i: number = 0; i < 2; i += 1) {
    // Retrieving
    for (let j: number = 0; j < vector.getLength(); j += 1) {
        console.log(`At ${j}: ${vector.at(j)}`);
    }

    // Capacity
    vector.ensureCapacity(10);
    console.log(`Capacity: ${vector.getCapacity()}`);
    console.log(`Length: ${vector.getLength()}`);

    // Resizing
    vector.resize(7);
    console.log(`Capacity: ${vector.getCapacity()}`);
    console.log(`Length: ${vector.getLength()}`);
}

// Sorting
let individuals: Set<string> = vector.toSet();
let sorted: string[] = Array.from(individuals);
sorted.sort();

for (let word of sorted) {
    console.log(`Set word: ${word}`);
}

