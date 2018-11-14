if __name__ == "__main__":
    # Initialization
    haystack = "Hello, GLS!"
    print(haystack)

    # Concatenation
    joined = "It is -> " + haystack + " <- It was"
    print(joined)

    # Characters
    text = "abc"
    first = text[0]
    print("{0}'s first character is {1}.".format(text, first))

    # Searching
    needle = "GLS"
    firstIndexOf = haystack.find(needle)
    secondIndexOf = haystack.find(needle, firstIndexOf + len(needle))

    # Results
    print("Found a first result at: {0}.".format(firstIndexOf))

    if secondIndexOf != -1:
        print("Found a second result at: {0}.".format(secondIndexOf))

