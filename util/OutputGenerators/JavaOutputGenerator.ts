import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single GLS project in Java.
 */
export const testJavaGenerator: IOutputGenerator = async ({ projectPath }): Promise<string[]> => {
    return spawnAndCaptureOutput("java", path.join(projectPath, "index.java"));
};
