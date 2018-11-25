package fibonacci.generation;

import fibonacci.generation.IGenerator;

public class NonCachingGenerator implements IGenerator {
    public Integer generate(Integer index) {
        if (index < 2) {
            return index;
        }

        Integer one = this.generate(index - 1);
        Integer two = this.generate(index - 2);

        return one + two;
    }
}
