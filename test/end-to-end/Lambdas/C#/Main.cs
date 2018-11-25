using System;

namespace Lambdas
{
    class Program
    {
        private static void RunOnInts(Func<int, string> format)
        {
            for (int i = 0; i < 10; i += 1)
            {
                Console.WriteLine(format(i));
            }
        }

        public static void Main()
        {
            Program.RunOnInts((i) => string.Format("Int: {0}", i));
        }
    }
}
