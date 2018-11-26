package lists;

class Index {
    private static void runOnInts(Function<Integer, String> format) {
        for (Integer i = 0; i < 10; i += 1) {
            System.out.println(format(i));
        }
    }

    public static void main(String[] args) {
        Index.runOnInts((i) -> String.format("Int: %0$d", i));
    }
}
