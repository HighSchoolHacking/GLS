import { expect } from "chai";
import * as fs from "mz/fs";
import * as path from "path";

import { IOutputGenerator } from "../util/OutputGenerators";
import { runCommandComparison } from "./ComparisonTests";

export interface IProjectOutputTestSettings {
    files: string[];
    languageName: string;
    outputGenerator: IOutputGenerator;
    projectDirectory: string;
    projectName: string;
}

export interface IFileComparisonSettings {
    accept: boolean;
    files: string[];
    languageName: string;
    projectDirectory: string;
}

export const ensureSameFileComparisons = async ({ accept, files, languageName, projectDirectory }: IFileComparisonSettings) => {
    for (const file of files) {
        await runCommandComparison({
            accept,
            languageName,
            outputDirectory: path.join(projectDirectory, languageName),
            projectDirectory,
            sourceDirectory: path.join(projectDirectory, "Gls"),
            sourceFileName: file,
            transformFilePath: true,
        });
    }
};

export const runProjectOutputTest = async ({
    files,
    languageName,
    outputGenerator,
    projectDirectory,
    projectName,
}: IProjectOutputTestSettings): Promise<void> => {
    // Arrange
    const expected = (await fs.readFile(path.join(projectDirectory, "output.txt"))).toString().split(/\r\n|\r|\n/g);

    // Act
    const actual = await outputGenerator({
        files,
        projectDirectory: path.join(projectDirectory, languageName),
        projectName,
    });

    // Assert
    expect(actual).to.be.deep.equal(expected);
};
