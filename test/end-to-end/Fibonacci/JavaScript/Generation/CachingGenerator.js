
exports.CachingGenerator = class CachingGenerator {

    constructor() {
        this.cache = {};
    }

    generate(index) {
        if (index < 2) {
            return index;
        }

        let one = this.generate(index - 1);
        let two = this.generate(index - 2);
        let result = one + two;

        this.cache[index] = result;

        return result;
    }

    isCached(index) {
        return {}.hasOwnProperty.call(this.cache, index);
    }
}

