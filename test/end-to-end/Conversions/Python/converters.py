from math import floor
def try_as_double(doubleLike):
    asDouble = None

    try:
        asDouble = float(doubleLike)
    except:
        pass

    if asDouble is not None:
        print("It's a double: {0}".format(floor(asDouble)))

def try_as_int(firstIntLike, secondIntLike):
    firstInt = None
    secondInt = None

    try:
        firstInt = int(firstIntLike)
        secondInt = int(secondIntLike)
    except:
        pass

    if firstInt is not None and secondInt is not None:
        print("Both are ints: {0} {1}".format(firstInt, secondInt))
