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
    container = {
        "bbb": 1,
        "ccc": 2,
        "ddd": 3
    }

    # Contains Key
    containsFalse = "aaa" in container

    if containsFalse:
        print("wrong")

    if "bbb" in container:
        print("contains bbb")

    # Setting
    container["aaa"] = 7
    print(container["aaa"])
#
