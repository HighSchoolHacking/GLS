import * as path from "path";

import { filterFoldersUnder } from "../util/filterFoldersUnder";
import { findBudgieFilesUnder } from "../util/findBudgieFilesUnder";
import { parseTestArguments } from "./ArgvParsing";
import { runCommandComparison } from "./ComparisonTests";
import { testLanguagesBag } from "./Files";

const rootPath = path.resolve("test/integration");
const { accept, inclusions, languages } = parseTestArguments(process.argv);
const testNames = filterFoldersUnder(rootPath, inclusions);
const commandTests = findBudgieFilesUnder(rootPath, testNames);

/**
 * Runs comparison test on a single file within a command.
 *
 * @param directory   Directory containing the file.
 * @param filePath   Test file name, excluding extension.
 */
const runFileComparisonTests = (directory: string, sourceFileName: string) => {
    for (const languageName of testLanguagesBag.getLanguageNames()) {
        if (languages === undefined || languages.has(languageName)) {
            it(languageName, async () => {
                await runCommandComparison({
                    accept,
                    languageName,
                    outputDirectory: directory,
                    projectDirectory: directory,
                    sourceDirectory: directory,
                    sourceFileName,
                    useWrappingComments: true,
                });
            });
        }
    }
};

describe("test/integration", () => {
    commandTests.forEach((testFiles: string[], command: string): void => {
        describe(command, () => {
            const directory = path.join(rootPath, command);

            for (const testFile of testFiles) {
                describe(testFile, () => {
                    runFileComparisonTests(directory, testFile);
                });
            }
        });
    });
});
