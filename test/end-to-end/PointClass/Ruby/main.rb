require_relative "./named_point"
require_relative "./point"

point = Point.new(1, 2)

puts point.x
puts point.y

named = NamedPoint.new(3, 4, "My Point")

puts named.get_label()
