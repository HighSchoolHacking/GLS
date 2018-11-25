package lists;

import lists.Album;
import java.util.ArrayList;

class Index {
    private static void printInts(String label, ArrayList<int> items) {
        System.out.println(String.format("The first %0$s is %1$d.", label, items[0]));
        System.out.println(String.format("The last %0$s is %1$d.", label, items[items.size() - 1]));

        for (int item : items) {
            System.out.println(String.format("%0$s: %1$d", label, item));
        }

        for (int i = 0; i < items.size(); i += 1) {
            System.out.println(String.format("%0$s %1$d: %2$d", label, i, items[i]));
        }
    }

    private static void printStrings(String label, ArrayList<String> items) {
        System.out.println(String.format("The first %0$s is %1$s.", label, items[0]));
        System.out.println(String.format("The last %0$s is %1$s.", label, items[items.size() - 1]));

        for (String item : items) {
            System.out.println(String.format("%0$s: %1$s", label, item));
        }

        for (int i = 0; i < items.size(); i += 1) {
            System.out.println(String.format("%0$s %1$d: %2$s", label, i, items[i]));
        }
    }

    private static void printListFancy<T>(String label, ArrayList<T> items, Function<T, String> getLabel) {
        for (T item : items) {
            System.out.println(getLabel(item));
        }

        for (int i = 0; i < items.size(); i += 1) {
            System.out.println(String.format("%0$s %1$d: %2$s", label, i, getLabel(items[i])));
        }
    }

    public static void main(String[] args) {
        // Initialization
        ArrayList<String> aaa = new ArrayList<String>();
        ArrayList<int> bbb = new ArrayList<int> { 1, 2, 3 };
        ArrayList<ArrayList<String>> ccc = new ArrayList<ArrayList<String>> { aaa, new ArrayList<String> { "eee", "fff", "ggg" } };

        // Members
        ArrayList<String> fruits = new ArrayList<String> { "apple", "banana", "cherry" };
        System.out.println(String.format("There are %0$d fruits.", fruits.size()));
        System.out.println(String.format("The first fruit is %0$s.", fruits[0]));

        // Popping
        ArrayList<String> colors = new ArrayList<String> { "red", "orange", "yellow", "green" };
        colors.remove(colors.size() - 1);
        System.out.println(String.format("The last color is %0$s.", colors[colors.size() - 1]));

        colors.remove(0);
        System.out.println(String.format("The first color is %0$s.", colors[0]));

        // Pushing
        ArrayList<String> pets = new ArrayList<String> { "bird", "cat" };
        pets.add("dog");
        System.out.println(String.format("The last pet is %0$s.", pets[pets.size() - 1]));

        // Sorting strings
        ArrayList<String> flavors = new ArrayList<String> { "plain", "chocolate", "vanilla", "strawberry" };
        flavors.sort();
        Index.printStrings("flavor", flavors);

        // Sorting ints
        ArrayList<int> ints = new ArrayList<int> { 1, 10, 2, -3, 8, 4, 5 };
        ints.sort();
        Index.printInts("int", ints);

        // Sorting members
        ArrayList<Album> albums = new ArrayList<Album> { new Album("Thriller", 1982), new Album("Back in Black", 1980), new Album("The Dark Side of the Moon", 1973) };
        albums.sort((albumA, albumB) -> albumA.name.compareTo(albumB.name ? 1 : -1);
        Index.printListFancy("album by name", albums, (album) -> album.name);
        albums.sort((albumA, albumB) -> albumA.year < albumB.year ? 1 : -1);
        Index.printListFancy("album by year", albums, (album) -> album.getLabel());
    }
}
