<?php
require __DIR__ . './direction.php';

function printValue($direction) {
    if ($direction == Direction::Horizontal) {
        echo "Horizontal." . "\n";
    } else if ($direction == Direction::Vertical) {
        echo "Vertical." . "\n";
    } else {
        echo "Unknown..." . "\n";
    }
}

printValue(Direction::Unknown);
printValue(Direction::Horizontal);
printValue(Direction::Vertical);

$direction = Direction::Unknown;
printValue($direction);
