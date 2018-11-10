import * as glob from "glob";
import * as path from "path";

/**
 * Retrieves child .gls files within directories.
 *
 * @param rootPath   Absolute path to directories.
 * @param directoryNames   Directory names to search within.
 * @param prefix   Directory to search within each test, if not the same directory.
 * @returns Child .gls files within the directories.
 */
export const findGlsFilesUnder = (rootPath: string, directoryNames: string[], prefix: string = "") => {
    const tests = new Map<string, string[]>();

    for (const childName of directoryNames) {
        const directoryPath = path.resolve(rootPath, childName, prefix);
        const testFiles = glob
            .sync(`${directoryPath}/**/*.gls`)
            .map((testFileName) => testFileName.substring(directoryPath.length + 1, testFileName.indexOf(".gls")));

        if (testFiles.length !== 0) {
            tests.set(childName, testFiles);
        }
    }

    return tests;
};
