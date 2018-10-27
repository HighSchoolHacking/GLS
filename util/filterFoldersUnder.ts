import * as fs from "fs";
import * as minimatch from "minimatch";

/**
 * Retrieves child directories within a directory.
 *
 * @param rootPath   Absolute path to a directory.
 * @param inclusions   Command groups to only include, if not all.
 * @returns Child directory names within the directory.
 */
export const filterFoldersUnder = (rootPath: string, inclusions?: ReadonlySet<string>) => {
    const childrenNames = fs.readdirSync(rootPath);
    if (inclusions === undefined) {
        return childrenNames;
    }

    const inclusionMatchers = Array.from(inclusions.keys());

    return childrenNames.filter((childName) =>
        inclusionMatchers.some((inclusionMatcher) =>
            minimatch(childName, inclusionMatcher, {
                nocase: true,
            }),
        ),
    );
};
