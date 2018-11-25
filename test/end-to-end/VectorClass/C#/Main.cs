using VectorClass;
using System;
using System.Collections.Generic;
using System.Linq;

namespace VectorClass
{

    class Program
    {
        public static void Main()
        {
            Vector<string> vector = new Vector<string>();
            string[] words = new string[] { "hello", "my", "baby", "hello", "my", "darling", "hello", "my", "ragtime", "gal" };

            // Adding
            foreach (string word in words)
            {
                vector.Push(word);
                Console.WriteLine(string.Format("First: {0}", vector.GetFirst()));
                Console.WriteLine(string.Format("Last: {0}", vector.GetLast()));
                Console.WriteLine(string.Format("Capacity: {0}", vector.GetCapacity()));
                Console.WriteLine(string.Format("Length: {0}", vector.GetLength()));
            }

            for (int i = 0; i < 2; i += 1)
            {
                // Retrieving
                for (int j = 0; j < vector.GetLength(); j += 1)
                {
                    Console.WriteLine(string.Format("At {0}: {1}", j, vector.At(j)));
                }

                // Capacity
                vector.EnsureCapacity(10);
                Console.WriteLine(string.Format("Capacity: {0}", vector.GetCapacity()));
                Console.WriteLine(string.Format("Length: {0}", vector.GetLength()));

                // Resizing
                vector.Resize(7);
                Console.WriteLine(string.Format("Capacity: {0}", vector.GetCapacity()));
                Console.WriteLine(string.Format("Length: {0}", vector.GetLength()));
            }

            // Sorting
            HashSet<string> individuals = vector.ToSet();
            List<string> sorted = individuals.ToList();
            sorted.Sort();

            foreach (string word in sorted)
            {
                Console.WriteLine(string.Format("Set word: {0}", word));
            }
        }
    }
}
