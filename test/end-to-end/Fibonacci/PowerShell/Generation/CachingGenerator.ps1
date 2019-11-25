
class CachingGenerator {
    $cache;

    CachingGenerator() {
        $this.cache = @{};
    }

    [int] generate($index) {
        if ($index -lt 2) {
            return $index;
        }

        $one = $this.generate($index - 1);
        $two = $this.generate($index - 2);
        $result = $one + $two;

        $this.cache[$index] = $result;

        return $result;
    }

    [bool] isCached($index) {
        return $this.cache.ContainsKey($index);
    }
}
