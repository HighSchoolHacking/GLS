#
# Initialization
haystack = "Hello, GLS!"

# Searching
needle = "GLS"
firstIndexOf = haystack.index(needle)
secondIndexOf = haystack.index(needle, firstIndexOf + needle.length)

# Results
puts "Found a first result at: $0%d." % [firstIndexOf]

if secondIndexOf != nil
    puts "Found a second result at: $0%d." % [secondIndexOf]
end
#
