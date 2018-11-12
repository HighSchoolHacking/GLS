#
require_relative "./vector"
require "set"

vector = Vector.new()
words = ["hello", "my", "baby", "hello", "my", "darling", "hello", "my", "ragtime", "gal"]

# Adding
for word in words
    vector.push(word)
    puts "First: %s" % [vector.get_first()]
    puts "Last: %s" % [vector.get_last()]
    puts "Capacity: %d" % [vector.get_capacity()]
    puts "Length: %d" % [vector.get_length()]
end

for i in 0...2
    # Retrieving
    for j in 0...vector.get_length()
        puts "At %d: %s" % [j, vector.at(j)]
    end

    # Capacity
    vector.ensure_capacity(10)
    puts "Capacity: %d" % [vector.get_capacity()]
    puts "Length: %d" % [vector.get_length()]

    # Resizing
    vector.resize(7)
    puts "Capacity: %d" % [vector.get_capacity()]
    puts "Length: %d" % [vector.get_length()]
end

# Sorting
individuals = vector.to_set()
sorted = individuals.to_a()
sorted.sort!()

for word in sorted
    puts "Set word: %s" % [word]
end
#
