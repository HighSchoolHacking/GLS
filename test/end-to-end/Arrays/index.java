//
package arrays;

import java.util.Arrays;

class Program {
    public static void main(String[] args) {
        // Initialization
        String[] aaa = new String[0];
        int[] bbb = new int[] { 1, 2, 3 };
        String[][] ccc = new String[][] { aaa, new String[] { "eee", "fff", "ggg" } };

        // Members
        String[] fruits = new String[] { "apple", "banana", "cherry" };
        System.out.println(String.format("The first fruit is %0$s.", fruits[0]));

        // Length
        System.out.println(String.format("There are %0$d fruits.", fruits.length));
    }
}
//
