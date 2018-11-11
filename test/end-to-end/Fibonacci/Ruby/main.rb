#
require_relative "./generation/caching_generator"
require_relative "./generation/non_caching_generator"

def get_label(index)
    if index == 1
        return "st"
    elsif index == 2
        return "nd"
    elsif index == 3
        return "rd"
    end

    return "th"
end

def use_generator(generator)
    for i in 0...10
        label = get_label(i)
        puts "The %d%s Fibonacci number is %d" % [i, label, generator.generate(i)]
    end
end

def check_cache(generator, index)
    if generator.is_cached(index)
        puts "%d is cached." % [index]
    else
        puts "%d is not cached." % [index]
    end
end

cached = CachingGenerator.new()
uncached = NonCachingGenerator.new()

use_generator(cached)
use_generator(uncached)

check_cache(cached, 7)
check_cache(cached, 14)
#
