package lists;

import lists.Album;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Comparator;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

class Main {
    private static void printInts(String label, ArrayList<Integer> items) {
        System.out.println(String.format("The first %s is %d.", label, items.get(0)));
        System.out.println(String.format("The last %s is %d.", label, items.get(items.size() - 1)));

        for (Integer item : items) {
            System.out.println(String.format("%s: %d", label, item));
        }

        for (Integer i = 0; i < items.size(); i += 1) {
            System.out.println(String.format("%s %d: %d", label, i, items.get(i)));
        }
    }

    private static void printStrings(String label, ArrayList<String> items) {
        System.out.println(String.format("The first %s is %s.", label, items.get(0)));
        System.out.println(String.format("The last %s is %s.", label, items.get(items.size() - 1)));

        for (String item : items) {
            System.out.println(String.format("%s: %s", label, item));
        }

        for (Integer i = 0; i < items.size(); i += 1) {
            System.out.println(String.format("%s %d: %s", label, i, items.get(i)));
        }
    }

    private static <T> void printListFancy(String label, ArrayList<T> items, Function<T, String> getLabel) {
        for (T item : items) {
            System.out.println(getLabel.apply(item));
        }

        for (Integer i = 0; i < items.size(); i += 1) {
            System.out.println(String.format("%s %d: %s", label, i, getLabel.apply(items.get(i))));
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
        System.out.println(String.format("The first fruit is %s.", fruits.get(0)));

        // Popping
        ArrayList<String> colors = new ArrayList<String>() {{ add("red"); add("orange"); add("yellow"); add("green"); }};
        colors.remove(colors.size() - 1);
        System.out.println(String.format("The last color is %s.", colors.get(colors.size() - 1)));

        colors.remove(0);
        System.out.println(String.format("The first color is %s.", colors.get(0)));

        // Pushing
        ArrayList<String> pets = new ArrayList<String>() {{ add("bird"); add("cat"); }};
        pets.add("dog");
        System.out.println(String.format("The last pet is %s.", pets.get(pets.size() - 1)));

        // Splicing
        pets.add(0, "aardvark");
        Main.printStrings("pets", pets);
        pets.add(2, "canary");
        Main.printStrings("pets", pets);
        pets.add(5, "emu");
        Main.printStrings("pets", pets);

        // Ranges
        ArrayList<String> all = new ArrayList<>(pets.subList(0, pets.size()));
        Main.printStrings("all pets", pets);
        ArrayList<String> lastFew = new ArrayList<>(pets.subList(3, pets.size()));
        Main.printStrings("last few pets", pets);

        // Ranges by index
        ArrayList<String> indexAll = new ArrayList<>(pets.subList(0, 3));
        Main.printStrings("all pets", pets);
        ArrayList<String> indexLastFew = new ArrayList<>(pets.subList(1, 3));
        Main.printStrings("last few pets", pets);

        // Ranges by length
        ArrayList<String> lengthAll = new ArrayList<>(pets.subList(0, 3));
        Main.printStrings("all pets", pets);
        ArrayList<String> lengthLastFew = new ArrayList<>(pets.subList(1, 4));
        Main.printStrings("last few pets", pets);

        // Sorting strings
        ArrayList<String> flavors = new ArrayList<String>() {{ add("plain"); add("chocolate"); add("vanilla"); add("strawberry"); }};
        flavors.sort(Comparator.naturalOrder());
        Main.printStrings("flavor", flavors);

        // Sorting ints
        ArrayList<Integer> ints = new ArrayList<Integer>() {{ add(1); add(10); add(2); add(-3); add(8); add(4); add(5); }};
        ints.sort(Comparator.naturalOrder());
        Main.printInts("int", ints);

        // Sorting members
        ArrayList<Album> albums = new ArrayList<Album>() {{ add(new Album("Thriller", 1982)); add(new Album("Back in Black", 1980)); add(new Album("The Dark Side of the Moon", 1973)); }};
        albums.sort((albumA, albumB) -> albumA.name.compareTo(albumB.name));
        Main.printListFancy("album by name", albums, (album) -> album.name);
        albums.sort((albumA, albumB) -> albumA.year.compareTo(albumB.year));
        Main.printListFancy("album by year", albums, (album) -> album.getLabel());
    }
}
