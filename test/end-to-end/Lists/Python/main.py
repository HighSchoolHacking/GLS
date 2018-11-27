from album import Album

def print_ints(label, items):
    print("The first {0} is {1}.".format(label, items[0]))
    print("The last {0} is {1}.".format(label, items[len(items) - 1]))

    for item in items:
        print("{0}: {1}".format(label, item))

    for i in range(0, len(items)):
        print("{0} {1}: {2}".format(label, i, items[i]))

def print_strings(label, items):
    print("The first {0} is {1}.".format(label, items[0]))
    print("The last {0} is {1}.".format(label, items[len(items) - 1]))

    for item in items:
        print("{0}: {1}".format(label, item))

    for i in range(0, len(items)):
        print("{0} {1}: {2}".format(label, i, items[i]))

def print_list_fancy(label, items, getLabel):
    for item in items:
        print(getLabel(item))

    for i in range(0, len(items)):
        print("{0} {1}: {2}".format(label, i, getLabel(items[i])))

if __name__ == "__main__":
    # Initialization
    aaa = []
    bbb = [1, 2, 3]
    ccc = [aaa, ["eee", "fff", "ggg"]]

    # Members
    fruits = ["apple", "banana", "cherry"]
    print("There are {0} fruits.".format(len(fruits)))
    print("The first fruit is {0}.".format(fruits[0]))

    # Popping
    colors = ["red", "orange", "yellow", "green"]
    colors.pop()
    print("The last color is {0}.".format(colors[len(colors) - 1]))

    colors.pop(0)
    print("The first color is {0}.".format(colors[0]))

    # Pushing
    pets = ["bird", "cat"]
    pets.append("dog")
    print("The last pet is {0}.".format(pets[len(pets) - 1]))

    # Splicing
    pets.insert(0, "aardvark")
    print_strings("pets", pets)
    pets.insert(2, "canary")
    print_strings("pets", pets)
    pets.insert(5, "emu")
    print_strings("pets", pets)

    # Ranges
    all = pets[:]
    print_strings("all pets", pets)
    lastFew = pets[3:]
    print_strings("last few pets", pets)

    # Ranges by index
    indexAll = pets[0:3]
    print_strings("all pets", pets)
    indexLastFew = pets[1:3]
    print_strings("last few pets", pets)

    # Ranges by length
    lengthAll = pets[0:3]
    print_strings("all pets", pets)
    lengthLastFew = pets[1:4]
    print_strings("last few pets", pets)

    # Sorting strings
    flavors = ["plain", "chocolate", "vanilla", "strawberry"]
    flavors.sort()
    print_strings("flavor", flavors)

    # Sorting ints
    ints = [1, 10, 2, -3, 8, 4, 5]
    ints.sort()
    print_ints("int", ints)

    # Sorting members
    albums = [Album("Thriller", 1982), Album("Back in Black", 1980), Album("The Dark Side of the Moon", 1973)]
    albums.sort(key = lambda album: album.name)
    print_list_fancy("album by name", albums, lambda album: album.name)
    albums.sort(key = lambda album: album.year)
    print_list_fancy("album by year", albums, lambda album: album.get_label())
