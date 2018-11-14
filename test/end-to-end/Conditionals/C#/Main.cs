using System;

namespace Conditionals
{
    class Program
    {
        public static void Main()
        {
            if (true)
            {
                Console.WriteLine("if true");
            }

            bool second = false;
            if (second)
            {
                Console.WriteLine("wrong if variable");
            }
            else
            {
                Console.WriteLine("if false else");
            }

            if (1 + 1 == 3)
            {
                Console.WriteLine("wrong if operation");
            }
            else if (2 + 2 == 3)
            {
                Console.WriteLine("wrong else if");
            }
            else
            {
                Console.WriteLine("else if else");
            }
        }
    }
}
