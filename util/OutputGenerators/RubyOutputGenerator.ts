import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single Budgie project in Ruby.
 */
export const testRubyGenerator: IOutputGenerator = async ({ projectDirectory }): Promise<string[]> => {
    return spawnAndCaptureOutput("ruby", {
        args: [path.join(projectDirectory, "main.rb")],
    });
};
