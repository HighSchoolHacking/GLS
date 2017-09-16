import { expect } from "chai";
import "mocha";
import * as path from "path";

import { Gls } from "../lib/Gls";
import { LanguagesBag } from "../lib/Languages/LanguagesBag";
import { findGlsTestSourcesUnder } from "../util";
import { FilesReader } from "./FilesReader";

/**
 * Test runner for comparing converted .gls files and expected output.
 */
export class ComparisonTestsRunner {
    /**
     * Minimatchers for command groups to run.
     */
    private readonly commandsToRun: Set<string>;

    /**
     * Command tests to be run within the section.
     */
    private readonly commandTests: Map<string, string[]>;

    /**
     * Reads contents of test case files.
     */
    private readonly filesReader: FilesReader;

    /**
     * Lookup of standard languages.
     */
    private readonly languagesBag: LanguagesBag;

    /**
     * Disk root path for test files.
     */
    private readonly rootPath: string;

    /**
     * Friendly directory path to read tests under.
     */
    private readonly section: string;

    /**
     * Initializes a new instance of the ComparisonTestsRunner class.
     *
     * @param section   Friendly directory path to read tests under.
     * @param commandsToRun   Command groups to run, if not all.
     */
    public constructor(section: string, commandsToRun: Set<string> = new Set<string>(["*"])) {
        this.section = section;
        this.commandsToRun = commandsToRun;
        this.languagesBag = new LanguagesBag();
        this.rootPath = path.resolve(section);
        this.commandTests = findGlsTestSourcesUnder(this.rootPath, this.commandsToRun);
        this.filesReader = new FilesReader(this.languagesBag, this.rootPath);
    }

    /**
     * Runs tests under the directory path.
     */
    public run(): void {
        describe(this.section, () => {
            this.commandTests.forEach((tests: string[], command: string): void => {
                describe(command, () => {
                    this.runCommandTests(command, tests);
                });
            });
        });
    }

    /**
     * Runs a test for a single command in a language.
     *
     * @param command   A GLS command to be tested, such as "ArrayInitialize".
     * @param test   A test to be run for the command, such as "no values".
     * @param language   The language the test is running as.
     */
    public runCommandTest(command: string, test: string, language: string): void {
        const gls = new Gls().setLanguage(language);
        const extension = gls.getLanguage().properties.general.extension;

        const source = this.filesReader.readCommandFile(command, test + ".gls");
        const expected = this.filesReader.readCommandFile(command, test + extension);

        expect(gls.convert(source)).to.be.deep.equal(expected);
    }

    /**
     * Runs command tests for the given command.
     *
     * @param command   Name of the command to test.
     * @param tests   Tests under the command
     */
    public runCommandTests(command: string, tests: string[]): void {
        for (const test of tests) {
            describe(test, () => {
                for (const language of this.languagesBag.getLanguageNames()) {
                    it(language, () => {
                        this.runCommandTest(command, test, language);
                    });
                }
            });
        }
    }
}
