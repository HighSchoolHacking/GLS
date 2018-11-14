const { CachingGenerator } = require("./Generation/CachingGenerator");
const { NonCachingGenerator } = require("./Generation/NonCachingGenerator");

function getLabel(index) {
    if (index === 1) {
        return "st";
    } else if (index === 2) {
        return "nd";
    } else if (index === 3) {
        return "rd";
    }

    return "th";
}

function useGenerator(generator) {
    for (let i = 0; i < 10; i += 1) {
        let label = getLabel(i);
        console.log(`The ${i}${label} Fibonacci number is ${generator.generate(i)}`);
    }
}

function checkCache(generator, index) {
    if (generator.isCached(index)) {
        console.log(`${index} is cached.`);
    } else {
        console.log(`${index} is not cached.`);
    }
}

let cached = new CachingGenerator();
let uncached = new NonCachingGenerator();

useGenerator(cached);
useGenerator(uncached);

checkCache(cached, 7);
checkCache(cached, 14);
