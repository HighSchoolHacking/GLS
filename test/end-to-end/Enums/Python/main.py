from direction import Direction

def print_value(direction):
    if direction == Direction.Horizontal:
        print("Horizontal.")
    elif direction == Direction.Vertical:
        print("Vertical.")
    else:
        print("Unknown...")

if __name__ == "__main__":
    print_value(Direction.Unknown)
    print_value(Direction.Horizontal)
    print_value(Direction.Vertical)

    direction = Direction.Unknown
    print_value(direction)
