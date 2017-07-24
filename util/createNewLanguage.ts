// todo: use mz/fs for async/await :)
import * as fs from "fs";
import * as path from "path";

import { findGlsTestSourcesUnder } from "./findGlsTestSourcesUnder";

export interface ILanguageTemplate {
    extension: string;
    name: string;
}

const createLanguageFile = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    const source = path.join(__dirname, `../src/Languages/${oldLanguage.name}.ts`);
    const sink = path.join(__dirname, `../src/Languages/${newLanguage.name}.ts`);

    // don't judge pls, offline
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
    createLanguageFile(newLanguage, oldLanguage);
    createLanguageTests(newLanguage, oldLanguage);
};
