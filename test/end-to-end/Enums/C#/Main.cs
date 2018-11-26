using Enums;
using System;

namespace Enums
{

    class Program
    {
        private static void PrintValue(Direction direction)
        {
            if (direction == Direction.Horizontal)
            {
                Console.WriteLine("Horizontal.");
            }
            else if (direction == Direction.Vertical)
            {
                Console.WriteLine("Vertical.");
            }
            else
            {
                Console.WriteLine("Unknown...");
            }
        }

        public static void Main()
        {
            Program.PrintValue(Direction.Unknown);
            Program.PrintValue(Direction.Horizontal);
            Program.PrintValue(Direction.Vertical);

            Direction direction;
            direction = Direction.Unknown;
            Program.PrintValue(direction);
        }
    }
}
