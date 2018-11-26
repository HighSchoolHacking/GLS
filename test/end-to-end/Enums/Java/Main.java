package enums;

import enums.Direction;

class Main {
    private static void printValue(Direction direction) {
        if (direction == Direction.Horizontal) {
            System.out.println("Horizontal.");
        } else if (direction == Direction.Vertical) {
            System.out.println("Vertical.");
        } else {
            System.out.println("Unknown...");
        }
    }

    public static void main(String[] args) {
        Main.printValue(Direction.Unknown);
        Main.printValue(Direction.Horizontal);
        Main.printValue(Direction.Vertical);

        Direction direction;
        direction = Direction.Unknown;
        Main.printValue(direction);
    }
}
