import { testCSharpGenerator } from "./CSharpOutputGenerator";
import { testJavaScriptGenerator } from "./JavaScriptOutputGenerator";
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
    ["JavaScript", testJavaScriptGenerator],
    ["Python", testPythonGenerator],
    ["Ruby", testRubyGenerator],
    ["TypeScript", testTypeScriptGenerator],
]);
