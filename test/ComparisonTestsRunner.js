var ComparisonTestsRunner = (function () {
    "use strict";

    const expect = require("chai").expect;
    const fs = require("fs");
    const path = require("path");
    const LanguagesBag = require("../Source/Languages/LanguagesBag").LanguagesBag;
    const Gls = require("../Source/Gls").Gls;

    /**
     * Test runner for comparing converted .gls files and expected output.
     */
    class ComparisonTestsRunner {
        /**
         * Initializes a new instance of the ComparisonTestsRunner class.
         * 
         * @param {string} section   A directory path to read tests under.
         */
        constructor(section) {
            this.section = section;
            this.rootPath = path.resolve(section);
            this.commandTests = this.readTestsUnderPath(this.rootPath);
            this.languagesBag = new LanguagesBag();
        }

        /**
         * Runs tests under the directory path.
         */
        run() {
            describe(this.section, () => {
                for (const command in this.commandTests) {
                    describe(command, () => this.runCommandTests(command));
                }
            });
        }

        /**
         * Runs command tests for the given command.
         * 
         * @param {string} command   The name of the command to test.
         */
        runCommandTests(command) {
            this.commandTests[command]
                .forEach(test => {
                    describe(test, () => {
                        this.languagesBag.getLanguageNames()
                            .forEach(language => {
                                it(language, () => {
                                    this.runCommandTest(command, test, language);
                                });
                            });
                    });
                });
        }

        /**
         * Runs a test for a single command in a language.
         * 
         * @param {string} command   A GLS command to be tested, such as "ArrayInitialize".
         * @param {string} test   A test to be run for the command, such as "no values".
         * @param {string} language   The language the test is running as.
         */
        runCommandTest(command, test, language) {
            const gls = new Gls().setLanguage(language);
            const extension = gls.getLanguage().properties.general.extension;

            const source = this.readCommandFile(command, test + ".gls");
            const expected = this.readCommandFile(command, test + extension);

            expect(gls.convert(source)).to.be.deep.equal(expected);
        }

        /**
         * Retrieves, for each command in a directory, tests under that command.
         * 
         * @param rootPath   An absolute path to a command's tests folder.
         * @returns Tests for each command in a directory.
         * @private
         */
        readTestsUnderPath(rootPath) {
            const children = fs.readdirSync(rootPath);
            let tests = {};

            children.forEach(childName => {
                tests[childName] = fs.readdirSync(path.resolve(rootPath, childName))
                    .filter(testFileName => testFileName.indexOf(".gls") !== -1)
                    .map(testFileName => testFileName.substring(0, testFileName.indexOf(".gls")))
            });

            return tests;
        }
        
        /**
         * 
         * 
         * @private
         */
        readCommandFile(command, name) {
            const filePath = path.resolve(this.rootPath, command, name);
            const lines = fs.readFileSync(filePath).toString().replace(/\r/g, "").split("\n");

            return lines.slice(lines.indexOf("-") + 1, lines.lastIndexOf("-"));
        }
    }

    return ComparisonTestsRunner;
})();

module.exports = ComparisonTestsRunner;
