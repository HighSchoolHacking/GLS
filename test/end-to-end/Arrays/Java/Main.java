package arrays;

import java.util.Arrays;

class Index {
    public static void main(String[] args) {
        // Initialization
        String[] aaa = new String[0];
        Integer[] bbb = new Integer[] { 1, 2, 3 };
        String[][] ccc = new String[][] { aaa, new String[] { "eee", "fff", "ggg" } };

        // Members
        String[] fruits = new String[] { "apple", "banana", "cherry" };
        System.out.println(String.format("The first fruit is $s.", fruits[0]));

        // Length
        System.out.println(String.format("There are $d fruits.", fruits.length));
    }
}
