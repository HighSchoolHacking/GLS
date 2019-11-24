<?php
function tryAsDouble($doubleLike) {
    if (is_numeric($doubleLike)) {$asDouble = floatval($doubleLike);

        echo 'It is a double: ' . floor($asDouble) . '' . "\n";
    }
}

function tryAsInt($firstIntLike, $secondIntLike) {
    if (ctype_digit($firstIntLike) && ctype_digit($secondIntLike)) {$firstInt = intval($firstIntLike);
    $secondInt = intval($secondIntLike);

        echo 'Both are ints: ' . $firstInt . ' ' . $secondInt . '' . "\n";
    }
}
