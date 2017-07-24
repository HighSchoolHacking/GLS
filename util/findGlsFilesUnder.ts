import * as fs from "fs";
import * as minimatch from "minimatch";

/**
 * Retrieves, command names within a directory.
 * 
 * @param rootPath   An absolute path to a command's tests folder.
 * @param inclusions   Command groups to only include, if not all.
 * @returns Command names within the directory.
 */
export const findGlsFilesUnder = (rootPath: string, inclusions?: Set<string>) => {
    const childrenNames = fs.readdirSync(rootPath);
    if (inclusions === undefined) {
        return childrenNames;
    }

    const inclusionMatchers = Array.from(inclusions.keys());

    return childrenNames
        .filter(
            (childName) => inclusionMatchers.some(
                (inclusionMatcher) => minimatch(childName, inclusionMatcher, {
                    nocase: true
                })));
};
