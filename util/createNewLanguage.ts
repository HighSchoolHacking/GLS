// todo: use mz/fs for async/await :)
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

import { findGlsTestSourcesUnder } from "./findGlsTestSourcesUnder";

export interface ILanguageTemplate {
    extension: string;
    name: string;
}

const normalizeEndlines = (text: string) => text.replace(/\r\n|\r|\n/g, os.EOL);

const addToIndex = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    const filePath = path.join(__dirname, `../src/index.ts`);
    const oldExportTemplate = `export { ${oldLanguage.name} } from "./Languages/${oldLanguage.name}";`;
    const newExportTemplate = `export { ${newLanguage.name} } from "./Languages/${newLanguage.name}";`;

    fs.writeFileSync(
        filePath,
        normalizeEndlines(fs.readFileSync(filePath).toString())
            .replace(oldExportTemplate, `${oldExportTemplate}${os.EOL}${newExportTemplate}`));
};

const createLanguageBagMember = (languageName: string) => normalizeEndlines(`
    /**
     * An instance of the ${languageName} class.
     */
    public ${languageName}: ${languageName} = new ${languageName}();
`);

const addToLanguagesBag = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    const filePath = path.join(__dirname, `../src/Languages/LanguagesBag.ts`);
    const oldImportTemplate = `import { ${oldLanguage.name} } from "./${oldLanguage.name}";`;
    const newImportTemplate = `import { ${newLanguage.name} } from "./${newLanguage.name}";`;
    const oldMemberTemplate = createLanguageBagMember(oldLanguage.name);
    const newMemberTemplate = createLanguageBagMember(newLanguage.name);

    fs.writeFileSync(
        filePath,
        normalizeEndlines(fs.readFileSync(filePath).toString())
            .replace(oldImportTemplate, `${oldImportTemplate}${os.EOL}${newImportTemplate}`)
            .replace(oldMemberTemplate, oldMemberTemplate + newMemberTemplate));
};

const createLanguageFile = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    const source = path.join(__dirname, `../src/Languages/${oldLanguage.name}.ts`);
    const sink = path.join(__dirname, `../src/Languages/${newLanguage.name}.ts`);

    const sourceContents = fs.readFileSync(source)
        .toString()
        .replace(
            new RegExp(
                ` ${oldLanguage.name} `, "g"),
                ` ${newLanguage.name} `)
        .replace(
            `.extension = "${oldLanguage.extension}"`,
            `.extension = "${newLanguage.extension}"`)
        .replace(
            `.name = "${oldLanguage.name}"`,
            `.name = "${newLanguage.name}"`);
    fs.writeFileSync(sink, sourceContents);
};

const createLanguageTestsUnder = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate, category: string) => {
    const filesRoot = path.join(__dirname, `../test/${category}`);
    const glsTests = findGlsTestSourcesUnder(filesRoot);

    glsTests.forEach((glsCases, glsTest) => {
        const casesRoot = path.join(filesRoot, glsTest);
        for (const glsCase of glsCases) {
            const source = path.join(casesRoot, glsCase + oldLanguage.extension);
            const sink = path.join(casesRoot, glsCase + newLanguage.extension);

            fs.writeFileSync(sink, fs.readFileSync(source).toString());
        }
    });
};

const createLanguageTests = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    createLanguageTestsUnder(newLanguage, oldLanguage, "integration");
    createLanguageTestsUnder(newLanguage, oldLanguage, "end-to-end");
};

export const createNewLanguage = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    addToIndex(newLanguage, oldLanguage);
    addToLanguagesBag(newLanguage, oldLanguage);
    createLanguageFile(newLanguage, oldLanguage);
    createLanguageTests(newLanguage, oldLanguage);
};
