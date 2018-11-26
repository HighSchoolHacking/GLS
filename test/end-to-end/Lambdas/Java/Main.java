package lists;

import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

class Main {
    private static void runOnInts(Function<Integer, String> format) {
        for (Integer i = 0; i < 10; i += 1) {
            System.out.println(format.apply(i));
        }
    }

    public static void main(String[] args) {
        Main.runOnInts((i) -> String.format("Int: $d", i));
    }
}
