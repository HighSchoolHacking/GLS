import { spawn } from "child_process";
import * as path from "path";
import { IOutputGenerator } from "../OutputTests";

/**
 * Runs an output comparison test for a single GLS project in C#.
 */
export const testCSharpGenerator: IOutputGenerator = async ({ projectPath }): Promise<string[]> => {
    return new Promise<string[]>((resolve, reject) => {
        let outData = "";
        let errorData = "";

        const child = spawn("dotnet", ["run", "--project", path.join(projectPath, "index.csproj")], {
            stdio: "pipe",
        });

        child.stdout.on("data", (chunk: string | Buffer) => {
            outData += chunk;
        });

        child.stderr.on("error", (error: Error) => {
            errorData += `\n${error.stack}`;
        });

        child.stderr.on("data", (chunk: string | Buffer) => {
            errorData += chunk;
        });

        child.on("close", () => {
            if (errorData === "") {
                resolve(outData.split(/\r\n|\r|\n/g));
            } else {
                if (outData !== undefined) {
                    errorData = outData + errorData;
                }

                reject(new Error(errorData));
            }
        });
    });
};
