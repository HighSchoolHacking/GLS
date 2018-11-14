package lists;

import lists.Converters;

class Index {
    public static void main(String[] args) {
        // Strings to numbers
        String doubleLike = "3.5";
        String doubleNotLike = "a3.5";
        String intLike = "7";
        String intNotLike = "a";

        Converters.tryAsDouble(doubleLike);
        Converters.tryAsDouble(doubleNotLike);
        Converters.tryAsInt(intLike, "10");
        Converters.tryAsInt(intNotLike, "fish");
    }
}
