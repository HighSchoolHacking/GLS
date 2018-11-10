#
class Direction(Enum):
    Unknown = 0
    Horizontal = 1
    Vertical = 2

if __name__ == "__main__":
    print("Unknown by lookup is {0}".format(Direction.Unknown))
    print("Horizontal by lookup is {0}".format(Direction.Horizontal))
    print("Vertical by lookup is {0}".format(Direction.Vertical))

    unknown = Direction.Unknown

    print("unknown variable is {0}".format(unknown))
#
