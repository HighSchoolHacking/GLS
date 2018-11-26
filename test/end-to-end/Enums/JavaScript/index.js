const { Direction } = require("./Direction");

function printValue(direction) {
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

let direction;
direction = Direction.Unknown;
printValue(direction);
