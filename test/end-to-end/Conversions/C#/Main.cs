using Lists;

namespace Lists
{

    class Program
    {
        public static void Main()
        {
            // Strings to numbers
            string doubleLike = "3.5";
            string doubleNotLike = "a3.5";
            string intLike = "7";
            string intNotLike = "a";

            Converters.TryAsDouble(doubleLike);
            Converters.TryAsDouble(doubleNotLike);
            Converters.TryAsInt(intLike, "10");
            Converters.TryAsInt(intNotLike, "fish");
        }
    }
}
