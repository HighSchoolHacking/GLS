require_relative "./direction"

def print_value(direction)
    if direction == Direction::Horizontal
        puts "Horizontal."
    elsif direction == Direction::Vertical
        puts "Vertical."
    else
        puts "Unknown..."
    end
end

print_value(Direction::Unknown)
print_value(Direction::Horizontal)
print_value(Direction::Vertical)

direction = Direction::Unknown
print_value(direction)
