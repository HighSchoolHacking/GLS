import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single GLS project in JavaScript.
 */
export const testJavaScriptGenerator: IOutputGenerator = async ({ projectDirectory }): Promise<string[]> => {
    return spawnAndCaptureOutput("node", path.join(projectDirectory, "index.js"));
};
