using Lists;
using System.Collections.Generic;
using System;

namespace Lists
{

    class Program
    {
        private static void PrintInts(string label, List<int> items)
        {
            Console.WriteLine(string.Format("The first {0} is {1}.", label, items[0]));
            Console.WriteLine(string.Format("The last {0} is {1}.", label, items[items.Count - 1]));

            foreach (int item in items)
            {
                Console.WriteLine(string.Format("{0}: {1}", label, item));
            }

            for (int i = 0; i < items.Count; i += 1)
            {
                Console.WriteLine(string.Format("{0} {1}: {2}", label, i, items[i]));
            }
        }

        private static void PrintStrings(string label, List<string> items)
        {
            Console.WriteLine(string.Format("The first {0} is {1}.", label, items[0]));
            Console.WriteLine(string.Format("The last {0} is {1}.", label, items[items.Count - 1]));

            foreach (string item in items)
            {
                Console.WriteLine(string.Format("{0}: {1}", label, item));
            }

            for (int i = 0; i < items.Count; i += 1)
            {
                Console.WriteLine(string.Format("{0} {1}: {2}", label, i, items[i]));
            }
        }

        private static void PrintListFancy<T>(string label, List<T> items, Func<T, string> getLabel)
        {
            foreach (T item in items)
            {
                Console.WriteLine(getLabel(item));
            }

            for (int i = 0; i < items.Count; i += 1)
            {
                Console.WriteLine(string.Format("{0} {1}: {2}", label, i, getLabel(items[i])));
            }
        }

        public static void Main()
        {
            // Initialization
            List<string> aaa = new List<string>();
            List<int> bbb = new List<int> { 1, 2, 3, };
            List<List<string>> ccc = new List<List<string>> { aaa, new List<string> { "eee", "fff", "ggg", }, };

            // Members
            List<string> fruits = new List<string> { "apple", "banana", "cherry", };
            Console.WriteLine(string.Format("There are {0} fruits.", fruits.Count));
            Console.WriteLine(string.Format("The first fruit is {0}.", fruits[0]));

            // Popping
            List<string> colors = new List<string> { "red", "orange", "yellow", "green", };
            colors.RemoveAt(colors.Count - 1);
            Console.WriteLine(string.Format("The last color is {0}.", colors[colors.Count - 1]));

            colors.RemoveAt(0);
            Console.WriteLine(string.Format("The first color is {0}.", colors[0]));

            // Pushing
            List<string> pets = new List<string> { "bird", "cat", };
            pets.Add("dog");
            Console.WriteLine(string.Format("The last pet is {0}.", pets[pets.Count - 1]));

            // Splicing
            pets.Insert(0, "aardvark");
            Program.PrintStrings("pets", pets);
            pets.Insert(2, "canary");
            Program.PrintStrings("pets", pets);
            pets.Insert(5, "emu");
            Program.PrintStrings("pets", pets);

            // Sorting strings
            List<string> flavors = new List<string> { "plain", "chocolate", "vanilla", "strawberry", };
            flavors.Sort();
            Program.PrintStrings("flavor", flavors);

            // Sorting ints
            List<int> ints = new List<int> { 1, 10, 2, -3, 8, 4, 5, };
            ints.Sort();
            Program.PrintInts("int", ints);

            // Sorting members
            List<Album> albums = new List<Album> { new Album("Thriller", 1982), new Album("Back in Black", 1980), new Album("The Dark Side of the Moon", 1973), };
            albums.Sort((albumA, albumB) => albumA.Name.CompareTo(albumB.Name));
            Program.PrintListFancy("album by name", albums, (album) => album.Name);
            albums.Sort((albumA, albumB) => albumA.Year < albumB.Year ? -1 : 1);
            Program.PrintListFancy("album by year", albums, (album) => album.GetLabel());
        }
    }
}
