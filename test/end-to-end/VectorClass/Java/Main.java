//
package vectorclass;

import vectorclass.Vector;
import java.util.Arrays;
import java.util.ArrayList;

class Index {
    public static void main(String[] args) {
        Vector<string> vector = new Vector<string>();
        String[] words = new String[] { "hello", "my", "baby", "hello", "my", "darling", "hello", "my", "ragtime", "gal" };

        // Adding
        for (String word : words) {
            vector.push(word);
            System.out.println(String.format("First: %0$s", vector.getFirst()));
            System.out.println(String.format("Last: %0$s", vector.getLast()));
            System.out.println(String.format("Capacity: %0$d", vector.getCapacity()));
            System.out.println(String.format("Length: %0$d", vector.getLength()));
        }

        for (int i = 0; i < 2; i += 1) {
            // Retrieving
            for (int j = 0; j < vector.getLength(); j += 1) {
                System.out.println(String.format("At %0$d: %1$s", j, vector.at(j)));
            }

            // Capacity
            vector.ensureCapacity(10);
            System.out.println(String.format("Capacity: %0$d", vector.getCapacity()));
            System.out.println(String.format("Length: %0$d", vector.getLength()));

            // Resizing
            vector.resize(7);
            System.out.println(String.format("Capacity: %0$d", vector.getCapacity()));
            System.out.println(String.format("Length: %0$d", vector.getLength()));
        }

        // Sorting
        HashSet<String> individuals = vector.toSet();
        ArrayList<String> sorted = new ArrayList<>(individuals);
        sorted.sort();

        for (String word : sorted) {
            System.out.println(String.format("Set word: %0$s", word));
        }
    }
}
//
