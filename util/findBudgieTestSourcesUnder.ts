import * as fs from "fs";
import * as path from "path";

/**
 * Retrieves, for each command in a directory, tests under that command.
 *
 * @param rootPath   An absolute path to a command's tests folder.
 * @param inclusions   Command groups to run, if not all.
 * @returns Tests for each command in a directory.
 */
export const findBudgieTestSourcesUnder = (rootPath: string): Map<string, string[]> => {
    const childrenNames = fs.readdirSync(rootPath);
    const tests = new Map<string, string[]>();

    for (const childName of childrenNames) {
        tests.set(
            childName,
            fs
                .readdirSync(path.resolve(rootPath, childName))
                .filter((testFileName) => testFileName.indexOf(".bg") !== -1)
                .map((testFileName) => testFileName.substring(0, testFileName.indexOf(".bg"))),
        );
    }

    return tests;
};
