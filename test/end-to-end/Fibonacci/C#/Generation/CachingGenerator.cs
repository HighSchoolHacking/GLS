//
using Fibonacci.Generation;
using System.Collections.Generic;

namespace Fibonacci.Generation
{

    public class CachingGenerator : IGenerator
    {
        private Dictionary<int, int> cache;

        public CachingGenerator()
        {
            this.cache = new Dictionary<int, int>();
        }

        public int Generate(int index)
        {
            if (index < 2)
            {
                return index;
            }

            int one = this.Generate(index - 1);
            int two = this.Generate(index - 2);
            int result = one + two;

            this.cache[index] = result;

            return result;
        }

        public bool IsCached(int index)
        {
            return this.cache.ContainsKey(index);
        }
    }
}
//
