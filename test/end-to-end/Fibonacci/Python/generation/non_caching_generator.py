
class NonCachingGenerator:
    def generate(self, index):
        if index < 2:
            return index

        one = self.generate(index - 1)
        two = self.generate(index - 2)

        return one + two
