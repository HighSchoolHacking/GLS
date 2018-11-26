package fornumbers;

class Main {
    public static void main(String[] args) {
        for (Integer aaa = 0; aaa < 10; aaa += 1) {
            System.out.println(String.format("aaa is $d", aaa));
        }

        for (Integer bbb = 3; bbb < 15; bbb += 2) {
            System.out.println(String.format("bbb is $d", bbb));
        }
    }
}
