import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single GLS project in Ruby.
 */
export const testRubyGenerator: IOutputGenerator = async ({ projectPath }): Promise<string[]> => {
    return spawnAndCaptureOutput("ruby", path.join(projectPath, "main.rb"));
};
