import { expect } from "chai";
import * as fs from "mz/fs";
import * as path from "path";

import { IOutputGenerator } from "../util/OutputGenerators";
import { runCommandComparisonTest } from "./ComparisonTests";

export const ensureSameFileComparisons = async (projectPath: string, files: string[], languageName: string) => {
    for (const file of files) {
        await runCommandComparisonTest(languageName, path.join(projectPath, file));
    }
};

export const runProjectOutputTest = async (
    projectPath: string,
    files: string[],
    languageName: string,
    outputGenerator: IOutputGenerator,
): Promise<void> => {
    // Arrange
    await ensureSameFileComparisons(projectPath, files, languageName);
    const expected = (await fs.readFile(path.join(projectPath, "output.txt"))).toString().split(/\r\n|\r|\n/g);

    // Act
    const actual = await outputGenerator({ files, projectPath });

    // Assert
    expect(actual).to.be.deep.equal(expected);
};
