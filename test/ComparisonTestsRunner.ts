import { expect } from "chai";
import * as fs from "fs";
import { describe, it } from "mocha";
import * as path from "path";

import { Gls } from "../lib/Gls";
import { LanguagesBag } from "../lib/Languages/LanguagesBag";

/**
 * Test runner for comparing converted .gls files and expected output.
 */
export class ComparisonTestsRunner {
    /**
     * Friendly directory path to read tests under.
     */
    private section: string;

    /**
     * Command groups to run, if not all.
     */
    private commandsToRun?: Set<string>;

    /**
     * Disk root path for the section.
     */
    private rootPath: string;

    /**
     * Command tests to be run within the section.
     */
    private commandTests;

    /**
     * Initializes a new instance of the ComparisonTestsRunner class.
     * 
     * @param section   Friendly directory path to read tests under.
     * @param commandsToRun   Command groups to run, if not all.
     */
    public constructor(section: string, commandsToRun?: Set<string>) {
        this.section = section;
        this.commandsToRun = commandsToRun;
        this.rootPath = path.resolve(section);
        this.commandTests = this.readTestsUnderPath(this.rootPath, this.commandsToRun);
    }

    /**
     * Runs tests under the directory path.
     */
    public run(): void {
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
    public runCommandTests(command): void {
        const languagesBag = new LanguagesBag();

        for (const test of this.commandTests[command]) {
            describe(test, () => {
                for (const language of languagesBag.getLanguageNames()) {
                    it(language, () => this.runCommandTest(command, test, language));
                }
            });
        }
    }

    /**
     * Runs a test for a single command in a language.
     * 
     * @param {string} command   A GLS command to be tested, such as "ArrayInitialize".
     * @param {string} test   A test to be run for the command, such as "no values".
     * @param {string} language   The language the test is running as.
     */
    public runCommandTest(command, test, language) {
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
    private readTestsUnderPath(rootPath, commandsToRun): Map<string, string[]> {
        const tests = new Map<string, string[]>();
        let childrenNames = fs.readdirSync(rootPath);

        if (commandsToRun.size > 0) {
            childrenNames = childrenNames.filter(child => commandsToRun.has(child.toLowerCase()));
        }

        for (const childName of childrenNames) {
            tests[childName] = fs.readdirSync(path.resolve(rootPath, childName))
                .filter(testFileName => testFileName.indexOf(".gls") !== -1)
                .map(testFileName => testFileName.substring(0, testFileName.indexOf(".gls")));
        }

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
    private readCommandFile(command, name) {
        const filePath = path.resolve(this.rootPath, command, name);
        const lines = fs.readFileSync(filePath).toString().replace(/\r/g, "").split("\n");

        return lines.slice(lines.indexOf("-") + 1, lines.lastIndexOf("-"));
    }
}
