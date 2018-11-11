#

class CachingGenerator
    attr_accessor :cache

    def initialize()
        self.cache = {}
    end

    def generate(index)
        if index < 2
            return index
        end

        one = self.generate(index - 1)
        two = self.generate(index - 2)
        result = one + two

        self.cache[index] = result

        return result
    end

    def is_cached(index)
        return self.cache.key?(index)
    end
end
#
