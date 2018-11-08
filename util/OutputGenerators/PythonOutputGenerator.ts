import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single GLS project in Python.
 */
export const testPythonGenerator: IOutputGenerator = async ({ projectPath }): Promise<string[]> => {
    return spawnAndCaptureOutput("python3", path.join(projectPath, "main.py"));
};
