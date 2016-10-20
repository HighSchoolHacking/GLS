const ArgvParser = (function () {
    "use strict";

    /**
     * Parsers test names from argv.
     */
    class ArgvParser {
        /**
         * Initializes a new instance of the ArgvParser class.
         * 
         * @param {string[]} argv   Arguments from process.argv.
         */
        constructor(argv) {
            this.argv = argv;
        }

        /**
         * @returns {Set} Test names from argv.
         */
        parseCommandNames() {
            const testNames = new Set();

            for (let i = 0; i < this.argv.length - 1; i += 1) {
                if (this.argv[i] === "--command") {
                    testNames.add(this.argv[i + 1].toLowerCase());
                }
            }

            return testNames;
        }
    }

    return ArgvParser;
})();

module.exports = ArgvParser;
