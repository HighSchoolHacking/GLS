
class CachingGenerator:

    def __init__(self):
        self.__cache = {}

    def generate(self, index):
        if index < 2:
            return index

        one = self.generate(index - 1)
        two = self.generate(index - 2)
        result = one + two

        self.__cache[index] = result

        return result

    def is_cached(self, index):
        return index in self.__cache

