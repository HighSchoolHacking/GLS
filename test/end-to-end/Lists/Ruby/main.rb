require_relative "./album"

def print_ints(label, items)
    puts "The first %s is %d." % [label, items[0]]
    puts "The last %s is %d." % [label, items[items.length - 1]]

    for item in items
        puts "%s: %d" % [label, item]
    end

    for i in 0...items.length
        puts "%s %d: %d" % [label, i, items[i]]
    end
end

def print_strings(label, items)
    puts "The first %s is %s." % [label, items[0]]
    puts "The last %s is %s." % [label, items[items.length - 1]]

    for item in items
        puts "%s: %s" % [label, item]
    end

    for i in 0...items.length
        puts "%s %d: %s" % [label, i, items[i]]
    end
end

def print_list_fancy(label, items, getLabel)
    for item in items
        puts getLabel.call(item)
    end

    for i in 0...items.length
        puts "%s %d: %s" % [label, i, getLabel.call(items[i])]
    end
end

# Initialization
aaa = []
bbb = [1, 2, 3]
ccc = [aaa, ["eee", "fff", "ggg"]]

# Members
fruits = ["apple", "banana", "cherry"]
puts "There are %d fruits." % [fruits.length]
puts "The first fruit is %s." % [fruits[0]]

# Popping
colors = ["red", "orange", "yellow", "green"]
colors.pop
puts "The last color is %s." % [colors[colors.length - 1]]

colors.shift
puts "The first color is %s." % [colors[0]]

# Pushing
pets = ["bird", "cat"]
pets.push("dog")
puts "The last pet is %s." % [pets[pets.length - 1]]

# Sorting strings
flavors = ["plain", "chocolate", "vanilla", "strawberry"]
flavors.sort!()
print_strings("flavor", flavors)

# Sorting ints
ints = [1, 10, 2, -3, 8, 4, 5]
ints.sort!()
print_ints("int", ints)

# Sorting members
albums = [Album.new("Thriller", 1982), Album.new("Back in Black", 1980), Album.new("The Dark Side of the Moon", 1973)]
albums.sort_by! {|album| album.name}
print_list_fancy("album by name", albums, lambda { |album| album.name })
albums.sort_by! {|album| album.year}
print_list_fancy("album by year", albums, lambda { |album| album.get_label() })
