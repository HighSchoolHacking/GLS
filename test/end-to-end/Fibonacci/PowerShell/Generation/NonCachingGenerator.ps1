
class NonCachingGenerator {
    [int] generate($index) {
        if ($index -lt 2) {
            return $index;
        }

        $one = $this.generate($index - 1);
        $two = $this.generate($index - 2);

        return $one + $two;
    }
}
