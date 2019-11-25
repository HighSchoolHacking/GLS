import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single Budgie project in PowerShell.
 */
export const testPowerShellGenerator: IOutputGenerator = async ({ projectDirectory }): Promise<string[]> => {
    return spawnAndCaptureOutput("powershell", {
        args: [path.join(projectDirectory, "Main.ps1")],
        cwd: projectDirectory,
    });
};
