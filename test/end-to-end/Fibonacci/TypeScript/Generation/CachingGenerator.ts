import { IGenerator } from "./Generator";

export class CachingGenerator implements IGenerator {
    private cache: { [i: number]: number };

    public constructor() {
        this.cache = {};
    }

    public generate(index: number): number {
        if (index < 2) {
            return index;
        }

        let one: number = this.generate(index - 1);
        let two: number = this.generate(index - 2);
        let result: number = one + two;

        this.cache[index] = result;

        return result;
    }

    public isCached(index: number): boolean {
        return {}.hasOwnProperty.call(this.cache, index);
    }
}

