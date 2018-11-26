import { Direction } from "./Direction";

function printValue(direction: Direction): void {
    if (direction === Direction.Horizontal) {
        console.log("Horizontal.");
    } else if (direction === Direction.Vertical) {
        console.log("Vertical.");
    } else {
        console.log("Unknown...");
    }
}

printValue(Direction.Unknown);
printValue(Direction.Horizontal);
printValue(Direction.Vertical);

let direction: Direction;
direction = Direction.Unknown;
printValue(direction);
