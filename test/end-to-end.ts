import * as fs from "fs";
import * as path from "path";

import { filterFoldersUnder } from "../util/filterFoldersUnder";
import { findGlsFilesUnder } from "../util/findGlsFilesUnder";
import { outputGenerators } from "../util/OutputGenerators";
import { parseTestArguments } from "./ArgvParsing";
import { testLanguagesBag } from "./FileReading";
import { ensureSameFileComparisons, runProjectOutputTest } from "./OutputTests";

const rootPath = path.resolve("test/end-to-end");
const { inclusions, languages } = parseTestArguments(process.argv);
const testNames = filterFoldersUnder(rootPath, inclusions);
const projectTests = findGlsFilesUnder(rootPath, testNames);

/**
 * Runs the comparison and (if available) output tests for each language on a project.
 *
 * @param languageName   Name of the language to test.
 * @param projectPath   Path to the project's directory.
 * @param files   File names within the project.
 */
const runProjectLanguageTests = (languageName: string, projectPath: string, files: string[]) => {
    it(languageName, async () => {
        await ensureSameFileComparisons(projectPath, files, languageName);

        // Todo: always exist!
        if (fs.existsSync(path.join(projectPath, "output.txt"))) {
            await runProjectOutputTest(projectPath, files, languageName, outputGenerators[languageName]);
        }
    });
};

describe("test/end-to-end", () => {
    projectTests.forEach(
        (files: string[], project: string): void => {
            const projectPath = path.join(rootPath, project);

            describe(project, () => {
                for (const languageName of testLanguagesBag.getLanguageNames()) {
                    if (languages === undefined || languages.has(languageName)) {
                        runProjectLanguageTests(languageName, projectPath, files);
                    }
                }
            });
        },
    );
});
