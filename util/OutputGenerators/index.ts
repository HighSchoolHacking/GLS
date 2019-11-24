import { testCSharpGenerator } from "./CSharpOutputGenerator";
import { testJavaGenerator } from "./JavaOutputGenerator";
import { testJavaScriptGenerator } from "./JavaScriptOutputGenerator";
import { testPHPGenerator } from "./PHPOutputGenerator";
import { testPythonGenerator } from "./PythonOutputGenerator";
import { testRubyGenerator } from "./RubyOutputGenerator";
import { testTypeScriptGenerator } from "./TypeScriptOutputGenerator";

export interface IOutputGeneratorArgs {
    files: string[];
    projectDirectory: string;
    projectName: string;
}

export type IOutputGenerator = (args: IOutputGeneratorArgs) => Promise<string[]>;

export const outputGenerators = new Map<string, IOutputGenerator>([
    ["C#", testCSharpGenerator],
    ["Java", testJavaGenerator],
    ["JavaScript", testJavaScriptGenerator],
    ["PHP", testPHPGenerator],
    ["Python", testPythonGenerator],
    ["Ruby", testRubyGenerator],
    ["TypeScript", testTypeScriptGenerator],
]);
