package fibonacci.generation;

import fibonacci.generation.IGenerator;

public class NonCachingGenerator implements IGenerator {
    public int generate(int index) {
        if (index < 2) {
            return index;
        }

        int one = this.generate(index - 1);
        int two = this.generate(index - 2);

        return one + two;
    }
}
