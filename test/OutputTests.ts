import { expect } from "chai";
import * as fs from "mz/fs";
import * as path from "path";

import { runCommandComparisonTest } from "./ComparisonTests";
import { testCSharpGenerator } from "../util/OutputGenerators/CSharpOutputGenerator";
import { testJavaScriptGenerator } from "../util/OutputGenerators/JavaScriptOutputGenerator";
import { testJavaGenerator } from "../util/OutputGenerators/JavaOutputGenerator";
import { testPythonGenerator } from "../util/OutputGenerators/PythonOutputGenerator";
import { testRubyGenerator } from "../util/OutputGenerators/RubyOutputGenerator";
import { testTypeScriptGenerator } from "../util/OutputGenerators/TypeScriptOutputGenerator";

export interface IOutputGeneratorArgs {
    files: string[];
    projectPath: string;
}

export type IOutputGenerator = (args: IOutputGeneratorArgs) => Promise<string[]>;

export const outputGenerators: { [i: string]: IOutputGenerator } = {
    "C#": testCSharpGenerator,
    Java: testJavaGenerator,
    JavaScript: testJavaScriptGenerator,
    Python: testPythonGenerator,
    Ruby: testRubyGenerator,
    TypeScript: testTypeScriptGenerator,
};

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
