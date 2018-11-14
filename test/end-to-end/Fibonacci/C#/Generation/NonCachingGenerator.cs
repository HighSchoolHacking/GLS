using Fibonacci.Generation;

namespace Fibonacci.Generation
{

    public class NonCachingGenerator : IGenerator
    {
        public int Generate(int index)
        {
            if (index < 2)
            {
                return index;
            }

            int one = this.Generate(index - 1);
            int two = this.Generate(index - 2);

            return one + two;
        }
    }
}
