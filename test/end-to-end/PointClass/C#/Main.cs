//
using PointClass;
using System;

namespace PointClass
{

    class Program
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
