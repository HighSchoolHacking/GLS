# Initialization
haystack = "Hello, GLS!"
puts haystack

# Concatenation
joined = "It is -> " + haystack + " <- It was"
puts joined

# Characters
text = "abc"
first = text[0]
puts "%s's first character is %c." % [text, first]

# Searching
needle = "GLS"
firstIndexOf = haystack.index(needle)
secondIndexOf = haystack.index(needle, firstIndexOf + needle.length)

# Results
puts "Found a first result at: %d." % [firstIndexOf]

if secondIndexOf != nil
    puts "Found a second result at: %d." % [secondIndexOf]
end

