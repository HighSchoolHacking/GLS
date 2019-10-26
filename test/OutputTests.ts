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
    useWrappingComments?: boolean;
}

export const ensureSameFileComparisons = async (settings: IFileComparisonSettings) => {
    for (const file of settings.files) {
        await runCommandComparison({
            accept: settings.accept,
            languageName: settings.languageName,
            outputDirectory: path.join(settings.projectDirectory, settings.languageName),
            projectDirectory: settings.projectDirectory,
            sourceDirectory: path.join(settings.projectDirectory, "Budgie"),
            sourceFileName: file,
            transformFilePath: true,
            useWrappingComments: settings.useWrappingComments,
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
