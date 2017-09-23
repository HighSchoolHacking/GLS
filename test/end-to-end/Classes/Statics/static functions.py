#
class Utilities:
    @staticmethod
    def get_longest(words):
        longest = ""

        for word in words:
            if len(word) > len(longest):
                longest = word

        Utilities.log(longest)

        return longest

    @staticmethod
    def log(word):
        print("Logging: " + word)
#
