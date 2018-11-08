#
class Direction
    Unknown = 0
    Horizontal = 1
    Vertical = 2
end

puts "Unknown by lookup is %d" % [Direction::Unknown]
puts "Horizontal by lookup is %d" % [Direction::Horizontal]
puts "Vertical by lookup is %d" % [Direction::Vertical]

unknown = Direction::Unknown

puts "unknown variable is %d" % [unknown]
#
