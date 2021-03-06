import { spawn } from "child_process";

export interface ISpawnOptions {
    args?: string[];
    cwd?: string;
}

export const spawnAndCaptureOutput = async (command: string, { args, cwd }: ISpawnOptions = {}): Promise<string[]> => {
    return new Promise<string[]>((resolve, reject) => {
        let outData = "";
        let errorData = "";

        const child = spawn(command, args, {
            cwd,
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
                return;
            }

            if (outData !== undefined) {
                errorData = outData + errorData;
            }

            reject(new Error(errorData));
        });
    });
};
