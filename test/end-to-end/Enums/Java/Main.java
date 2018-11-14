package enums;

enum Direction {
    Unknown(0),
    Horizontal(1),
    Vertical(2)
}

class Index {
    public static void main(String[] args) {
        System.out.println(String.format("Unknown by lookup is %0$d", Direction.Unknown));
        System.out.println(String.format("Horizontal by lookup is %0$d", Direction.Horizontal));
        System.out.println(String.format("Vertical by lookup is %0$d", Direction.Vertical));

        Direction direction;
        Direction unknown = Direction.Unknown;

        System.out.println(String.format("unknown variable is %0$d", unknown));
    }
}

