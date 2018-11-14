from generation.caching_generator import CachingGenerator
from generation.non_caching_generator import NonCachingGenerator

def get_label(index):
    if index == 1:
        return "st"
    elif index == 2:
        return "nd"
    elif index == 3:
        return "rd"

    return "th"

def use_generator(generator):
    for i in range(0, 10):
        label = get_label(i)
        print("The {0}{1} Fibonacci number is {2}".format(i, label, generator.generate(i)))

def check_cache(generator, index):
    if generator.is_cached(index):
        print("{0} is cached.".format(index))
    else:
        print("{0} is not cached.".format(index))

if __name__ == "__main__":
    cached = CachingGenerator()
    uncached = NonCachingGenerator()

    use_generator(cached)
    use_generator(uncached)

    check_cache(cached, 7)
    check_cache(cached, 14)
