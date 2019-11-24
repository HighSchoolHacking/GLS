<?php
if (true) {
    echo "if true" . "\n";
}

$second = false;
if ($second) {
    echo "wrong if variable" . "\n";
} else {
    echo "if false else" . "\n";
}

if (1 + 1 == 3) {
    echo "wrong if operation" . "\n";
} else if (2 + 2 == 3) {
    echo "wrong else if" . "\n";
} else {
    echo "else if else" . "\n";
}
