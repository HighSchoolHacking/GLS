import { fork } from "child_process";
import * as path from "path";
import { IOutputGenerator } from "../OutputTests";

/**
 * Runs an output comparison test for a single GLS project in JavaScript.
 */
export const testJavaScriptGenerator: IOutputGenerator = async ({ projectPath }): Promise<string[]> => {
    return new Promise<string[]>((resolve, reject) => {
        let out = "";
        let error = "";

        const child = fork(path.join(projectPath, "index.js"), [], {
            stdio: "pipe",
        });

        child.stdout.on("data", (chunk: string | Buffer) => {
            out += chunk;
        });

        child.stderr.on("error", (error: Error) => {
            reject(error);
        });

        child.stderr.on("data", (chunk: string | Buffer) => {
            error += chunk;
        });

        child.on("close", () => {
            if (error === "") {
                resolve(out.split(/\r\n|\r|\n/g));
            } else {
                reject(new Error(error));
            }
        });
    });
};
