import { IGenerator } from "./Generator";

export class NonCachingGenerator implements IGenerator {
    public generate(index: number): number {
        if (index < 2) {
            return index;
        }

        let one: number = this.generate(index - 1);
        let two: number = this.generate(index - 2);

        return one + two;
    }
}
