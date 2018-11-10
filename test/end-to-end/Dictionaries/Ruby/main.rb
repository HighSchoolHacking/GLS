#
# Types
foo = {}
bar = {}

# Indices
foo["baz"] = 7
qux = foo["baz"]
puts "baz is %d" % [foo["baz"]]
puts "qux is %d" % [qux]

# Initialization
aaa = {
    "bbb" => 1,
    "ccc" => 2,
    "ddd" => 3
}

# Contains Key
containsFalse = aaa.key?("aaa")

if containsFalse
    puts "wrong"
end

if aaa.key?("bbb")
    puts "contains bbb"
end
#
