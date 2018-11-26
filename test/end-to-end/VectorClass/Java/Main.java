package vectorclass;

import vectorclass.Vector;
import java.util.Arrays;
import java.util.HashSet;
import java.util.ArrayList;
import java.util.Comparator;

class Main {
    public static void main(String[] args) throws Exception {
        Vector<String> vector = new Vector<String>();
        String[] words = new String[] { "hello", "my", "baby", "hello", "my", "darling", "hello", "my", "ragtime", "gal" };

        // Adding
        for (String word : words) {
            vector.push(word);
            System.out.println(String.format("First: %s", vector.getFirst()));
            System.out.println(String.format("Last: %s", vector.getLast()));
            System.out.println(String.format("Capacity: %d", vector.getCapacity()));
            System.out.println(String.format("Length: %d", vector.getLength()));
        }

        for (Integer i = 0; i < 2; i += 1) {
            // Retrieving
            for (Integer j = 0; j < vector.getLength(); j += 1) {
                System.out.println(String.format("At %d: %s", j, vector.at(j)));
            }

            // Capacity
            vector.ensureCapacity(10);
            System.out.println(String.format("Capacity: %d", vector.getCapacity()));
            System.out.println(String.format("Length: %d", vector.getLength()));

            // Resizing
            vector.resize(7);
            System.out.println(String.format("Capacity: %d", vector.getCapacity()));
            System.out.println(String.format("Length: %d", vector.getLength()));
        }

        // Sorting
        HashSet<String> individuals = vector.toSet();
        ArrayList<String> sorted = new ArrayList<>(individuals);
        sorted.sort(Comparator.naturalOrder());

        for (String word : sorted) {
            System.out.println(String.format("Set word: %s", word));
        }
    }
}
