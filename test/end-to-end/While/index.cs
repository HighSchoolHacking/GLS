//
using System;

namespace While
{
    class Index
    {
        public static void Main()
        {
            while (true)
            {
                Console.WriteLine("Near-infinite");
                break;
            }

            int count = 0;

            while (count < 5)
            {
                count += 1;

                if (count % 2 == 0)
                {
                    continue;
                }

                Console.WriteLine(string.Format("count is {0}", count));
            }
        }
    }
}
//
