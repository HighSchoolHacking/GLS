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

# Sorting
flavors = ["plain", "chocolate", "vanilla", "strawberry"]
flavors.sort!()
puts "The first flavor is %s." % [flavors[0]]
puts "The last flavor is %s." % [flavors[flavors.length - 1]]

# Looping
for flavor in flavors
    puts "Flavor: %s." % [flavor]
end

for i in 0...flavors.length
    puts "Flavor %d: %s." % [i, flavors[i]]
end
