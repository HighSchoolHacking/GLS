import { testCSharpGenerator } from "./CSharpOutputGenerator";
import { testJavaGenerator } from "./JavaOutputGenerator";
import { testJavaScriptGenerator } from "./JavaScriptOutputGenerator";
import { testPythonGenerator } from "./PythonOutputGenerator";
import { testRubyGenerator } from "./RubyOutputGenerator";
import { testTypeScriptGenerator } from "./TypeScriptOutputGenerator";

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
