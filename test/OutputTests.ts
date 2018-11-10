import { expect } from "chai";
import * as fs from "mz/fs";
import * as path from "path";

import { IOutputGenerator } from "../util/OutputGenerators";
import { runCommandComparison } from "./ComparisonTests";

export interface IProjectOutputTestSettings {
    accept: boolean;
    files: string[];
    languageName: string;
    languageDirectories: boolean;
    outputGenerator: IOutputGenerator;
    projectPath: string;
}

export interface IFileComparisonSettings {
    accept: boolean;
    files: string[];
    languageDirectories: boolean;
    languageName: string;
    projectPath: string;
}

export const ensureSameFileComparisons = async ({
    accept,
    files,
    languageName,
    languageDirectories,
    projectPath,
}: IFileComparisonSettings) => {
    for (const file of files) {
        await runCommandComparison({
            accept,
            filePath: path.join(projectPath, file),
            languageDirectories,
            languageName,
            transformFilePath: true,
        });
    }
};

export const runProjectOutputTest = async ({
    files,
    languageDirectories,
    outputGenerator,
    projectPath,
}: IProjectOutputTestSettings): Promise<void> => {
    // Arrange
    const expected = (await fs.readFile(path.join(projectPath, "output.txt"))).toString().split(/\r\n|\r|\n/g);

    // Act
    const actual = await outputGenerator({ files, languageDirectories, projectPath });

    // Assert
    expect(actual).to.be.deep.equal(expected);
};
