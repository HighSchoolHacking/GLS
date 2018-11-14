using System;

namespace Enums
{
    enum Direction
    {
        Unknown = 0,
        Horizontal = 1,
        Vertical = 2
    }

    class Program
    {
        public static void Main()
        {
            Console.WriteLine(string.Format("Unknown by lookup is {0}", Direction.Unknown));
            Console.WriteLine(string.Format("Horizontal by lookup is {0}", Direction.Horizontal));
            Console.WriteLine(string.Format("Vertical by lookup is {0}", Direction.Vertical));

            Direction direction;
            Direction unknown = Direction.Unknown;

            Console.WriteLine(string.Format("unknown variable is {0}", unknown));
        }
    }
}
