import { CachingGenerator } from "./Generation/CachingGenerator";
import { IGenerator } from "./Generation/IGenerator";
import { NonCachingGenerator } from "./Generation/NonCachingGenerator";

function getLabel(index: number): string {
    if (index === 1) {
        return "st";
    } else if (index === 2) {
        return "nd";
    } else if (index === 3) {
        return "rd";
    }

    return "th";
}

function useGenerator(generator: IGenerator): void {
    for (let i: number = 0; i < 10; i += 1) {
        let label: string = getLabel(i);
        console.log(`The ${i}${label} Fibonacci number is ${generator.generate(i)}`);
    }
}

function checkCache(generator: CachingGenerator, index: number): void {
    if (generator.isCached(index)) {
        console.log(`${index} is cached.`);
    } else {
        console.log(`${index} is not cached.`);
    }
}

let cached: CachingGenerator = new CachingGenerator();
let uncached: IGenerator = new NonCachingGenerator();

useGenerator(cached);
useGenerator(uncached);

checkCache(cached, 7);
checkCache(cached, 14);
