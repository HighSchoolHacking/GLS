#
# Initialization
haystack = "Hello, GLS!"

# Searching
needle = "GLS"
firstIndexOf = haystack.find(needle)
secondIndexOf = haystack.find(needle, firstIndexOf + len(needle))

# Results
print("Found a first result at: {0}.".format(firstIndexOf))

if secondIndexOf != -1:
    print("Found a second result at: {0}.".format(secondIndexOf))
#
