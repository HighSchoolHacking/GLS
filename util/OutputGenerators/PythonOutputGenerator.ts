import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single Budgie project in Python.
 */
export const testPythonGenerator: IOutputGenerator = async ({ projectDirectory }): Promise<string[]> => {
    return spawnAndCaptureOutput("python3", {
        args: [path.join(projectDirectory, "main.py")],
    });
};
