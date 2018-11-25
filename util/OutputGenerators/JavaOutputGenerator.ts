import * as path from "path";

import { IOutputGenerator } from "./index";
import { spawnAndCaptureOutput } from "./Spawning";

/**
 * Runs an output comparison test for a single GLS project in Java.
 */
export const testJavaGenerator: IOutputGenerator = async ({ projectDirectory, projectName }): Promise<string[]> => {
    await spawnAndCaptureOutput("javac", {
        args: ["-d", path.join(projectDirectory), path.join(projectDirectory, "*.java")],
    });

    return spawnAndCaptureOutput("java", {
        args: [`${projectName.toLowerCase()}/Main`],
        cwd: projectDirectory,
    });
};
