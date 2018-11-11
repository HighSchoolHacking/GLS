import * as fs from "mz/fs";
import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

const template = `<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <NoWarn>0162,0414</NoWarn>
        <OutputType>Exe</OutputType>
        <TargetFramework>netcoreapp2.0</TargetFramework>
    </PropertyGroup>
</Project>
`;

/**
 * Runs an output comparison test for a single GLS project in C#.
 */
export const testCSharpGenerator: IOutputGenerator = async ({ projectDirectory, projectName }): Promise<string[]> => {
    const csprojPath = path.join(projectDirectory, projectName + ".csproj");

    await fs.writeFile(csprojPath, template, {
        flag: "w",
    });

    return spawnAndCaptureOutput("dotnet", "run", "--project", csprojPath);
};
