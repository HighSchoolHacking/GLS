import * as fs from "fs";
// @ts-ignore
import * as glob from "glob";

import { Gls } from "../../lib/Gls";

interface IFileError {
    error: Error;
    filePath: string;
    position: number;
}

const blockEnd = "\n```";
const blockStart = "```gls";

const gls = new Gls("C#");

const validateFileSection = (filePath: string, fileContents: string, start: number, fileErrors: IFileError[]) => {
    const codeStart = start + blockStart.length;
    const codeEnd = fileContents.indexOf(blockEnd, codeStart);
    const codeContents = fileContents
        .substring(codeStart, codeEnd)
        .trim()
        .split(/\r\n|\r|\n/g);

    try {
        gls.convert(codeContents);
    } catch (error) {
        fileErrors.push({
            error,
            filePath,
            position: codeStart,
        });
    }

    return codeEnd;
};

const validateFile = (filePath: string, fileErrors: IFileError[]) => {
    const fileContents = fs.readFileSync(filePath).toString();
    let start = 0;

    while (true) {
        start = fileContents.indexOf(blockStart, start);

        if (start === -1) {
            break;
        }

        start = validateFileSection(filePath, fileContents, start, fileErrors);
    }
};

const validateAllFiles = () => {
    const filePaths = [...glob.sync("docs/**/*.md"), "README.md"];
    const fileErrors: IFileError[] = [];

    for (const filePath of filePaths) {
        validateFile(filePath, fileErrors);
    }

    let hadError: boolean = false;

    for (const fileError of fileErrors) {
        // Docs are allowed to contain unsupported syntax commands
        if (fileError.error.message.indexOf("Unsupported syntax:") !== -1) {
            continue;
        }

        hadError = true;
        console.error(`Could not compile GLS code block in ${fileError.filePath} at position ${fileError.position}:`);
        console.error(`${fileError.error.stack}\n`);
    }

    process.exitCode = hadError ? 1 : 0;
};

validateAllFiles();
