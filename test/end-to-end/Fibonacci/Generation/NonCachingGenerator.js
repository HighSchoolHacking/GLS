//
const { IGenerator } = require("./Generator");

exports.NonCachingGenerator = class NonCachingGenerator {
    generate(index) {
        if (index < 2) {
            return index;
        }

        let one = this.generate(index - 1);
        let two = this.generate(index - 2);

        return one + two;
    }
}
//
