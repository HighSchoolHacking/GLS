import * as fs from "fs";
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
        tests.set(
            childName,
            fs
                .readdirSync(path.resolve(rootPath, childName))
                .filter((testFileName) => testFileName.indexOf(".gls") !== -1)
                .map((testFileName) => testFileName.substring(0, testFileName.indexOf(".gls"))),
        );
    }

    return tests;
};
