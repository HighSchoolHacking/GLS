import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single GLS project in C#.
 */
export const testCSharpGenerator: IOutputGenerator = async ({ projectPath }): Promise<string[]> => {
    const basename = path.basename(projectPath);

    return spawnAndCaptureOutput("dotnet", "run", "--project", path.join(projectPath, basename + ".csproj"));
};
