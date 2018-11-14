using System.Collections.Generic;
using System;

namespace Lists
{
    class Program
    {
        public static void Main()
        {
            // Initialization
            List<string> aaa = new List<string>();
            List<int> bbb = new List<int> { 1, 2, 3 };
            List<List<string>> ccc = new List<List<string>> { aaa, new List<string> { "eee", "fff", "ggg" } };

            // Members
            List<string> fruits = new List<string> { "apple", "banana", "cherry" };
            Console.WriteLine(string.Format("There are {0} fruits.", fruits.Count));
            Console.WriteLine(string.Format("The first fruit is {0}.", fruits[0]));

            // Popping
            List<string> colors = new List<string> { "red", "orange", "yellow", "green" };
            colors.RemoveAt(colors.Count - 1);
            Console.WriteLine(string.Format("The last color is {0}.", colors[colors.Count - 1]));

            colors.RemoveAt(0);
            Console.WriteLine(string.Format("The first color is {0}.", colors[0]));

            // Pushing
            List<string> pets = new List<string> { "bird", "cat" };
            pets.Add("dog");
            Console.WriteLine(string.Format("The last pet is {0}.", pets[pets.Count - 1]));

            // Sorting
            List<string> flavors = new List<string> { "plain", "chocolate", "vanilla", "strawberry" };
            flavors.Sort();
            Console.WriteLine(string.Format("The first flavor is {0}.", flavors[0]));
            Console.WriteLine(string.Format("The last flavor is {0}.", flavors[flavors.Count - 1]));

            // Looping
            foreach (string flavor in flavors)
            {
                Console.WriteLine(string.Format("Flavor: {0}.", flavor));
            }

            for (int i = 0; i < flavors.Count; i += 1)
            {
                Console.WriteLine(string.Format("Flavor {0}: {1}.", i, flavors[i]));
            }
        }
    }
}
