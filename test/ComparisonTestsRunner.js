const ComparisonTestsRunner = (function () {
    "use strict";

    const expect = require("chai").expect;
    const fs = require("fs");
    const path = require("path");
    const LanguagesBag = require("../src/Languages/LanguagesBag").LanguagesBag;
    const Gls = require("../src/Gls").Gls;

    /**
     * Test runner for comparing converted .gls files and expected output.
     */
    class ComparisonTestsRunner {
        /**
         * Initializes a new instance of the ComparisonTestsRunner class.
         * 
         * @param {string} section   A directory path to read tests under.
         * @param {Set} commandsToRun   Command groups to run, if not all.
         */
        constructor(section, commandsToRun) {
            this.section = section;
            this.commandsToRun = commandsToRun;
            this.rootPath = path.resolve(section);
            this.commandTests = this.readTestsUnderPath(this.rootPath, this.commandsToRun);
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
         * @param {string} rootPath   An absolute path to a command's tests folder.
         * @param {Set} commandsToRun   Command groups to run, if not all.
         * @returns {object}   Tests for each command in a directory.
         * @private
         */
        readTestsUnderPath(rootPath, commandsToRun) {
            const tests = {};
            let children = fs.readdirSync(rootPath);

            if (commandsToRun) {
                children = children.filter(child => {
                    return commandsToRun.has(child.toLowerCase());
                });
            }

            children.forEach(childName => {
                tests[childName] = fs.readdirSync(path.resolve(rootPath, childName))
                    .filter(testFileName => testFileName.indexOf(".gls") !== -1)
                    .map(testFileName => testFileName.substring(0, testFileName.indexOf(".gls")))
            });

            return tests;
        }
        
        /**
         * Reads the code contents of a test file.
         * 
         * @param {string} command   The command this file is under.
         * @param {string} name   The name of the file.
         * @returns {string[]}   Lines of code in the file.
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
