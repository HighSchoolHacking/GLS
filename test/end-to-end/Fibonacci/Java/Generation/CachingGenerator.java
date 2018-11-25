package fibonacci.generation;

import fibonacci.generation.IGenerator;
import java.util.HashMap;

public class CachingGenerator implements IGenerator {
    private HashMap<Integer, Integer> cache;

    public CachingGenerator() {
        this.cache = new HashMap<Integer, Integer>();
    }

    public Integer generate(Integer index) {
        if (index < 2) {
            return index;
        }

        Integer one = this.generate(index - 1);
        Integer two = this.generate(index - 2);
        Integer result = one + two;

        this.cache[index] = result;

        return result;
    }

    public Boolean isCached(Integer index) {
        return this.cache.containsKey(index);
    }
}
