#
from vector import Vector

if __name__ == "__main__":
    vector = Vector()
    words = ["hello", "my", "baby", "hello", "my", "darling", "hello", "my", "ragtime", "gal"]

    # Adding
    for string in words:
        vector.push(word)
        print("First: {0}".format(vector.get_first()))
        print("Last: {0}".format(vector.get_last()))
        print("Capacity: {0}".format(vector.get_capacity()))
        print("Length: {0}".format(vector.get_length()))

    for i in range(0, 2):
        # Retrieving
        for j in range(0, vector.get_length()):
            print("At {0}: {1}".format(j, vector.at(j)))

        # Capacity
        vector.ensure_capacity(10)
        print("Capacity: {0}".format(vector.get_capacity()))
        print("Length: {0}".format(vector.get_length()))

        # Resizing
        vector.resize(7)
        print("Capacity: {0}".format(vector.get_capacity()))
        print("Length: {0}".format(vector.get_length()))

    # Sorting
    individuals = vector.to_set()
    sorted = list(individuals)
    sorted.sort()

    for word in sorted:
        print("Set word: {0}".format(word))
#
