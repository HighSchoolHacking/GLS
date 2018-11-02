#
if __name__ == "__main__":
    # Types
    foo = {}
    bar = {}

    # Indices
    foo["baz"] = 7
    qux = foo["baz"]
    print("baz is {0}".format(foo["baz"]))
    print("qux is {0}".format(qux))

    # Initialization
    aaa = {
        "bbb": 1,
        "ccc": 2,
        "ddd": 3
    }

    # Contains Key
    containsFalse = "aaa" in aaa

    if containsFalse:
        print("wrong")

    if "bbb" in aaa:
        print("contains bbb")

    # Pair Iteration
    for key, value in aaa.items():
        print("{0} has {1}".format(key, value))
#
