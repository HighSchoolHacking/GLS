# Types
foo = {}
bar = {}

# Indices
foo["baz"] = 7
qux = foo["baz"]
puts "baz is %d" % [foo["baz"]]
puts "qux is %d" % [qux]

# Initialization
container = {
    "bbb" => 1,
    "ccc" => 2,
    "ddd" => 3
}

# Contains Key
containsFalse = container.key?("aaa")

if containsFalse
    puts "wrong"
end

if container.key?("bbb")
    puts "contains bbb"
end

# Setting
container["aaa"] = 7
puts container["aaa"]

