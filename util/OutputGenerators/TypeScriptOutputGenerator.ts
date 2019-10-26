import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single Budgie project in TypeScript.
 */
export const testTypeScriptGenerator: IOutputGenerator = async ({ projectDirectory }): Promise<string[]> => {
    return spawnAndCaptureOutput("node", {
        args: ["./node_modules/ts-node/dist/bin.js", path.join(projectDirectory, "index.ts")],
    });
};
