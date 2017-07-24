// todo: use mz/fs for async/await :)
import * as fs from "fs";
import * as path from "path";

const createLanguageFile = (languageName: string, templateName: string) => {
    const sink = path.join(__dirname, `../src/Languages/${languageName}.ts`);
    const source = path.join(__dirname, `../src/Languages/${templateName}.ts`);

    // don't judge pls, offline
    const sourceContents = fs.readFileSync(source)
        .toString()
        .replace(new RegExp(` ${templateName} `, "g"), ` ${languageName} `);
    fs.writeFileSync(sink, sourceContents);
};

export const newLanguage = (languageName: string, templateName: string = "TypeScript") => {
    createLanguageFile(languageName, templateName);
};
