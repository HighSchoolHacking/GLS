//
using System;

namespace Pointclass
{

    class Index
    {
        public static void Main()
        {
            Point point = new Point(1, 2);

            Console.WriteLine(point.X);
            Console.WriteLine(point.Y);

            NamedPoint named = new NamedPoint(3, 4, "My Point");

            Console.WriteLine(named.GetLabel());
        }
    }
}
//
