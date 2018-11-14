using System;

namespace Arrays
{
    class Program
    {
        public static void Main()
        {
            // Initialization
            string[] aaa = new string[0];
            int[] bbb = new int[] { 1, 2, 3 };
            string[][] ccc = new string[][] { aaa, new string[] { "eee", "fff", "ggg" } };

            // Members
            string[] fruits = new string[] { "apple", "banana", "cherry" };
            Console.WriteLine(string.Format("The first fruit is {0}.", fruits[0]));

            // Length
            Console.WriteLine(string.Format("There are {0} fruits.", fruits.Length));
        }
    }
}

