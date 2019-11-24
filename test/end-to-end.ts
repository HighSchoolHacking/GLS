import * as fs from "fs";
import * as path from "path";

import { filterFoldersUnder } from "../util/filterFoldersUnder";
import { findBudgieFilesUnder } from "../util/findBudgieFilesUnder";
import { outputGenerators } from "../util/OutputGenerators";
import { parseTestArguments } from "./ArgvParsing";
import { testLanguagesBag } from "./Files";
import { ensureSameFileComparisons, runProjectOutputTest } from "./OutputTests";

const rootPath = path.resolve("test/end-to-end");
const { accept, inclusions, languages } = parseTestArguments(process.argv);
const testNames = filterFoldersUnder(rootPath, inclusions);
const projectTests = findBudgieFilesUnder(rootPath, testNames, "Budgie");

/**
 * Runs the comparison and (if available) output tests for each language on a project.
 *
 * @param languageName   Name of the language to test.
 * @param projectDirectory   Path to the project's directory.
 * @param files   File names within the project.
 */
const runProjectLanguageTests = (languageName: string, projectDirectory: string, files: string[]) => {
    it(languageName, async () => {
        await ensureSameFileComparisons({
            accept,
            files,
            languageName,
            projectDirectory,
        });

        const outputGenerator = outputGenerators.get(languageName);
        if (outputGenerator === undefined) {
            throw new Error(`Missing output generator for '${languageName}.`);
        }

        if (fs.existsSync(path.join(projectDirectory, "output.txt"))) {
            await runProjectOutputTest({
                files,
                languageName,
                outputGenerator,
                projectDirectory,
                projectName: path.basename(projectDirectory),
            });
        }
    });
};

describe("test/end-to-end", () => {
    projectTests.forEach((files: string[], project: string): void => {
        const projectDirectory = path.join(rootPath, project);

        describe(project, () => {
            for (const languageName of testLanguagesBag.getLanguageNames()) {
                if (languages === undefined || languages.has(languageName)) {
                    runProjectLanguageTests(languageName, projectDirectory, files);
                }
            }
        });
    });
});
