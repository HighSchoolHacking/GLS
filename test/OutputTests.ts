import { expect } from "chai";
import * as fs from "mz/fs";
import * as path from "path";

import { IOutputGenerator } from "../util/OutputGenerators";
import { runCommandComparison } from "./ComparisonTests";

export interface IProjectOutputTestSettings {
    accept: boolean;
    files: string[];
    languageName: string;
    outputGenerator: IOutputGenerator;
    projectPath: string;
}

export interface IFileComparisonSettings {
    accept: boolean;
    files: string[];
    languageName: string;
    projectPath: string;
}

export const ensureSameFileComparisons = async ({ accept, files, languageName, projectPath }: IFileComparisonSettings) => {
    for (const file of files) {
        await runCommandComparison({
            accept,
            filePath: path.join(projectPath, file),
            languageName,
            transformFilePath: true,
        });
    }
};

export const runProjectOutputTest = async ({ files, outputGenerator, projectPath }: IProjectOutputTestSettings): Promise<void> => {
    // Arrange
    const expected = (await fs.readFile(path.join(projectPath, "output.txt"))).toString().split(/\r\n|\r|\n/g);

    // Act
    const actual = await outputGenerator({ files, projectPath });

    // Assert
    expect(actual).to.be.deep.equal(expected);
};
