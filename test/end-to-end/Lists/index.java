//
package lists;

class Program {
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

        // Sorting
        ArrayList<String> flavors = new ArrayList<String> { "plain", "chocolate", "vanilla", "strawberry" };
        flavors.sort();
        System.out.println(String.format("The first flavor is %0$s.", flavors[0]));
        System.out.println(String.format("The last flavor is %0$s.", flavors[flavors.size() - 1]));

        // Looping
        for (String flavor : flavors) {
            System.out.println(String.format("Flavor: %0$s.", flavor));
        }

        for (int i = 0; i < flavors.size(); i += 1) {
            System.out.println(String.format("Flavor %0$d: %1$s.", i, flavors[i]));
        }
    }
}
//
