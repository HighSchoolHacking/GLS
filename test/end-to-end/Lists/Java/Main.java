package lists;

import lists.Album;
import java.util.ArrayList;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

class Main {
    private static void printInts(String label, ArrayList<Integer> items) {
        System.out.println(String.format("The first %s is %d.", label, items[0]));
        System.out.println(String.format("The last %s is %d.", label, items[items.size() - 1]));

        for (Integer item : items) {
            System.out.println(String.format("%s: %d", label, item));
        }

        for (Integer i = 0; i < items.size(); i += 1) {
            System.out.println(String.format("%s %d: %d", label, i, items[i]));
        }
    }

    private static void printStrings(String label, ArrayList<String> items) {
        System.out.println(String.format("The first %s is %s.", label, items[0]));
        System.out.println(String.format("The last %s is %s.", label, items[items.size() - 1]));

        for (String item : items) {
            System.out.println(String.format("%s: %s", label, item));
        }

        for (Integer i = 0; i < items.size(); i += 1) {
            System.out.println(String.format("%s %d: %s", label, i, items[i]));
        }
    }

    private static void printListFancy<T>(String label, ArrayList<T> items, Function<T, String> getLabel) {
        for (T item : items) {
            System.out.println(getLabel.apply(item));
        }

        for (Integer i = 0; i < items.size(); i += 1) {
            System.out.println(String.format("%s %d: %s", label, i, getLabel.apply(items[i])));
        }
    }

    public static void main(String[] args) {
        // Initialization
        ArrayList<String> aaa = new ArrayList<String>();
        ArrayList<Integer> bbb = new ArrayList<Integer>() {{ add(1); add(2); add(3); }};
        ArrayList<ArrayList<String>> ccc = new ArrayList<ArrayList<String>>() {{ add(aaa); add(new ArrayList<String>() {{ add("eee"); add("fff"); add("ggg"); }}); }};

        // Members
        ArrayList<String> fruits = new ArrayList<String>() {{ add("apple"); add("banana"); add("cherry"); }};
        System.out.println(String.format("There are %d fruits.", fruits.size()));
        System.out.println(String.format("The first fruit is %s.", fruits[0]));

        // Popping
        ArrayList<String> colors = new ArrayList<String>() {{ add("red"); add("orange"); add("yellow"); add("green"); }};
        colors.remove(colors.size() - 1);
        System.out.println(String.format("The last color is %s.", colors[colors.size() - 1]));

        colors.remove(0);
        System.out.println(String.format("The first color is %s.", colors[0]));

        // Pushing
        ArrayList<String> pets = new ArrayList<String>() {{ add("bird"); add("cat"); }};
        pets.add("dog");
        System.out.println(String.format("The last pet is %s.", pets[pets.size() - 1]));

        // Sorting strings
        ArrayList<String> flavors = new ArrayList<String>() {{ add("plain"); add("chocolate"); add("vanilla"); add("strawberry"); }};
        flavors.sort();
        Main.printStrings("flavor", flavors);

        // Sorting ints
        ArrayList<Integer> ints = new ArrayList<Integer>() {{ add(1); add(10); add(2); add(-3); add(8); add(4); add(5); }};
        ints.sort();
        Main.printInts("int", ints);

        // Sorting members
        ArrayList<Album> albums = new ArrayList<Album>() {{ add(new Album("Thriller", 1982)); add(new Album("Back in Black", 1980)); add(new Album("The Dark Side of the Moon", 1973)); }};
        albums.sort((albumA, albumB) -> albumA.name.compareTo(albumB.name ? 1 : -1);
        Main.printListFancy("album by name", albums, (album) -> album.name);
        albums.sort((albumA, albumB) -> albumA.year < albumB.year ? 1 : -1));
        Main.printListFancy("album by year", albums, (album) -> album.getLabel());
    }
}
