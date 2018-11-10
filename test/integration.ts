import * as path from "path";

import { filterFoldersUnder } from "../util/filterFoldersUnder";
import { findGlsFilesUnder } from "../util/findGlsFilesUnder";
import { parseTestArguments } from "./ArgvParsing";
import { runCommandComparison } from "./ComparisonTests";
import { testLanguagesBag } from "./Files";

const rootPath = path.resolve("test/integration");
const { accept, inclusions, languages } = parseTestArguments(process.argv);
const testNames = filterFoldersUnder(rootPath, inclusions);
const commandTests = findGlsFilesUnder(rootPath, testNames);

/**
 * Runs comparison test on a single file within a command.
 *
 * @param directory   Directory containing the file.
 * @param testFile   Test file name, excluding extension.
 */
const runFileComparisonTests = (directory: string, testFile: string) => {
    for (const languageName of testLanguagesBag.getLanguageNames()) {
        if (languages === undefined || languages.has(languageName)) {
            it(languageName, async () => {
                await runCommandComparison({
                    accept,
                    filePath: path.join(directory, testFile),
                    languageDirectories: false,
                    languageName,
                });
            });
        }
    }
};

describe("test/integration", () => {
    commandTests.forEach(
        (testFiles: string[], command: string): void => {
            describe(command, () => {
                const directory = path.join(rootPath, command);

                for (const testFile of testFiles) {
                    describe(testFile, () => {
                        runFileComparisonTests(directory, testFile);
                    });
                }
            });
        },
    );
});
