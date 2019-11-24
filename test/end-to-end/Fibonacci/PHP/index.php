<?php
require __DIR__ . './generation/caching_generator.php';
require __DIR__ . './generation/non_caching_generator.php';

function getLabel($index) {
    if ($index == 1) {
        return "st";
    } else if ($index == 2) {
        return "nd";
    } else if ($index == 3) {
        return "rd";
    }

    return "th";
}

function useGenerator($generator) {
    for ($i; $i < 10; $i += 1) {
        $label = getLabel($i);
        echo sprintf("The %d%s Fibonacci number is %d", $i, $label, $generator->generate($i)) . "\n";
    }
}

function checkCache($generator, $index) {
    if ($generator->isCached($index)) {
        echo sprintf("%d is cached.", $index) . "\n";
    } else {
        echo sprintf("%d is not cached.", $index) . "\n";
    }
}

$cached = new CachingGenerator();
$uncached = new NonCachingGenerator();

useGenerator($cached);
useGenerator($uncached);

checkCache($cached, 7);
checkCache($cached, 14);
