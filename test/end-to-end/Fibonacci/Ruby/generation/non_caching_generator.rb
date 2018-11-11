#

class NonCachingGenerator
    def generate(index)
        if index < 2
            return index
        end

        one = self.generate(index - 1)
        two = self.generate(index - 2)

        return one + two
    end
end
#
