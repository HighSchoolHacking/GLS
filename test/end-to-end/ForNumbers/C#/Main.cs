//
using System;

namespace ForNumbers
{
    class Program
    {
        public static void Main()
        {
            for (int aaa = 0; aaa < 10; aaa += 1)
            {
                Console.WriteLine(string.Format("aaa is {0}", aaa));
            }

            for (int bbb = 3; bbb < 15; bbb += 2)
            {
                Console.WriteLine(string.Format("bbb is {0}", bbb));
            }
        }
    }
}
//
