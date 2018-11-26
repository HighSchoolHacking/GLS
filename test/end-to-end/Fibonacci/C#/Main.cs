using Fibonacci.Generation;
using System;

namespace Fibonacci
{

    class Program
    {
        private static string GetLabel(int index)
        {
            if (index == 1)
            {
                return "st";
            }
            else if (index == 2)
            {
                return "nd";
            }
            else if (index == 3)
            {
                return "rd";
            }

            return "th";
        }

        private static void UseGenerator(IGenerator generator)
        {
            for (int i = 0; i < 10; i += 1)
            {
                string label = Program.GetLabel(i);
                Console.WriteLine(string.Format("The {0}{1} Fibonacci number is {2}", i, label, generator.Generate(i)));
            }
        }

        private static void CheckCache(CachingGenerator generator, int index)
        {
            if (generator.IsCached(index))
            {
                Console.WriteLine(string.Format("{0} is cached.", index));
            }
            else
            {
                Console.WriteLine(string.Format("{0} is not cached.", index));
            }
        }

        public static void Main()
        {
            CachingGenerator cached = new CachingGenerator();
            IGenerator uncached = new NonCachingGenerator();

            Program.UseGenerator(cached);
            Program.UseGenerator(uncached);

            Program.CheckCache(cached, 7);
            Program.CheckCache(cached, 14);
        }
    }
}
