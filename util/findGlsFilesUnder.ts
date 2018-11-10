import * as fs from "fs";
import * as glob from "glob";
import * as path from "path";

/**
 * Retrieves child .gls files within directories.
 *
 * @param rootPath   Absolute path to directories.
 * @param directoryNames   Directory names to search within.
 * @returns Child .gls files within the directories.
 */
export const findGlsFilesUnder = (rootPath: string, directoryNames: string[]) => {
    const tests = new Map<string, string[]>();

    for (const childName of directoryNames) {
        const directoryPath = path.resolve(rootPath, childName);
        const testFiles = glob
            .sync(`${directoryPath}/**/*.gls`)
            .map((testFileName) => testFileName.substring(directoryPath.length, testFileName.indexOf(".gls")));

        tests.set(childName, testFiles);
    }

    return tests;
};
