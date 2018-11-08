//
package fornumbers;

class Index {
    public static void main(String[] args) {
        for (int aaa = 0; aaa < 10; aaa += 1) {
            System.out.println(String.format("aaa is %0$d", aaa));
        }

        for (int bbb = 3; bbb < 15; bbb += 2) {
            System.out.println(String.format("bbb is %0$d", bbb));
        }
    }
}
//
