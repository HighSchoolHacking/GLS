<?php

class CachingGenerator {
    private $cache;

    function __construct() {
        $this->$cache = [];
    }

    function generate($index) {
        if ($index < 2) {
            return $index;
        }

        $one = $this->generate($index - 1);
        $two = $this->generate($index - 2);
        $result = $one + $two;

        $this->$cache[$index] = $result;

        return $result;
    }

    function isCached($index) {
        return array_key_exists($index, $this->$cache);
    }
}
