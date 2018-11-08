#
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

    # Sorting
    flavors = ["plain", "chocolate", "vanilla", "strawberry"]
    flavors.sort()
    print("The first flavor is {0}.".format(flavors[0]))
    print("The last flavor is {0}.".format(flavors[len(flavors) - 1]))

    # Looping
    for flavor in flavors:
        print("Flavor: {0}.".format(flavor))

    for i in range(0, len(flavors)):
        print("Flavor {0}: {1}.".format(i, flavors[i]))
#
