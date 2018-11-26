package fibonacci;

import fibonacci.generation.CachingGenerator;
import fibonacci.generation.IGenerator;
import fibonacci.generation.NonCachingGenerator;

class Main {
    private static String getLabel(number index) {
        if (index == 1) {
            return "st";
        } else if (index == 2) {
            return "nd";
        } else if (index == 3) {
            return "rd";
        }

        return "th";
    }

    private static void useGenerator(IGenerator generator) {
        for (Integer i = 0; i < 10; i += 1) {
            String label = Main.getLabel(i);
            System.out.println(String.format("The $d$s Fibonacci number is $d", i, label, generator.generate(i)));
        }
    }

    private static void checkCache(CachingGenerator generator, Integer index) {
        if (generator.isCached(index)) {
            System.out.println(String.format("$d is cached.", index));
        } else {
            System.out.println(String.format("$d is not cached.", index));
        }
    }

    public static void main(String[] args) {
        CachingGenerator cached = new CachingGenerator();
        IGenerator uncached = new NonCachingGenerator();

        Main.useGenerator(cached);
        Main.useGenerator(uncached);

        Main.checkCache(cached, 7);
        Main.checkCache(cached, 14);
    }
}
