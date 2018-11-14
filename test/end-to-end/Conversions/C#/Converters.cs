using System;

namespace Lists
{
    public static class Converters
    {
        public static void TryAsDouble(string doubleLike)
        {
            if (double.TryParse(doubleLike, out var asDouble))
            {
                Console.WriteLine(string.Format("It's a double: {0}", (int)(asDouble)));
            }
        }

        public static void TryAsInt(string firstIntLike, string secondIntLike)
        {
            if (int.TryParse(firstIntLike, out var firstInt) && int.TryParse(secondIntLike, out var secondInt))
            {
                Console.WriteLine(string.Format("Both are ints: {0} {1}", firstInt, secondInt));
            }
        }
    }
}
