//
package fibonacci.generation;

import fibonacci.generation.generator.IGenerator;
import java.util.HashMap;

public class CachingGenerator implements IGenerator {
    private HashMap<int, int> cache;

    public CachingGenerator() {
        this.cache = new HashMap<int, int>();
    }

    public int generate(int index) {
        if (index < 2) {
            return index;
        }

        int one = this.generate(index - 1);
        int two = this.generate(index - 2);
        int result = one + two;

        this.cache[index] = result

        return result;
    }

    public boolean isCached(int index) {
        return this.cache.containsKey(index);
    }
}
//
