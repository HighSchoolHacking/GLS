import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as yargs from "yargs";

import { findGlsTestSourcesUnder } from "./findGlsTestSourcesUnder";

export interface ILanguageTemplate {
    extension: string;
    name: string;
}

const normalizeEndlines = (text: string) => text.replace(/\r\n|\r|\n/g, os.EOL);

const addToIndex = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    const filePath = path.join(__dirname, "../src/index.ts");
    const oldExportTemplate = `export { ${oldLanguage.name} } from "./Languages/${oldLanguage.name}";`;
    const newExportTemplate = `export { ${newLanguage.name} } from "./Languages/${newLanguage.name}";`;

    fs.writeFileSync(
        filePath,
        normalizeEndlines(fs.readFileSync(filePath).toString()).replace(
            oldExportTemplate,
            `${oldExportTemplate}${os.EOL}${newExportTemplate}`,
        ),
    );
};

const addToLanguagesBag = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    const filePath = path.join(__dirname, "../src/Rendering/Languages/LanguagesBag.ts");
    const oldImportTemplate = `import { ${oldLanguage.name} } from "./${oldLanguage.name}";`;
    const newImportTemplate = `import { ${newLanguage.name} } from "./${newLanguage.name}";`;
    const oldMemberTemplate = `        new ${oldLanguage.name}(),`;
    const newMemberTemplate = `        new ${newLanguage.name}(),`;

    fs.writeFileSync(
        filePath,
        normalizeEndlines(fs.readFileSync(filePath).toString())
            .replace(oldImportTemplate, `${oldImportTemplate}${os.EOL}${newImportTemplate}`)
            .replace(oldMemberTemplate, `${oldMemberTemplate}${os.EOL}${newMemberTemplate}`),
    );
};

const createLanguageFile = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    const source = path.join(__dirname, `../src/Rendering/Languages/${oldLanguage.name}.ts`);
    const sink = path.join(__dirname, `../src/Rendering/Languages/${newLanguage.name}.ts`);

    const sourceContents = fs
        .readFileSync(source)
        .toString()
        .replace(new RegExp(` ${oldLanguage.name} `, "gi"), ` ${newLanguage.name} `)
        .replace(`.extension = "${oldLanguage.extension}"`, `.extension = "${newLanguage.extension}"`)
        .replace(`.name = "${oldLanguage.name}"`, `.name = "${newLanguage.name}"`);
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

const createNewLanguage = (newLanguage: ILanguageTemplate, oldLanguage: ILanguageTemplate) => {
    addToIndex(newLanguage, oldLanguage);
    addToLanguagesBag(newLanguage, oldLanguage);
    createLanguageFile(newLanguage, oldLanguage);
    createLanguageTests(newLanguage, oldLanguage);
};

// Creates an object literal yargs will accept with a few defaults
const createYargsOption = (specifiedOptions: Partial<yargs.Options>) => {
    const defaultOptions = {
        demandOption: true,
        nargs: 1,
    };
    return { ...defaultOptions, ...specifiedOptions };
};

// Ensures that an extension string passed in as an argument begins with a period
const extensionFormatCheck = (extension: string): string => {
    return extension.charAt(0) !== "." ? "." + extension : extension;
};

const main = () => {
    const program = yargs
        .usage(
            "Usage: gulp util:new-language --language-name <language-name> " +
                "--language-extension <language-extension> --base-name <base-name>",
        )
        .option(
            "language-name",
            createYargsOption({
                alias: "n",
                describe: "name of the language to add",
            }),
        )
        .option(
            "language-extension",
            createYargsOption({
                alias: "e",
                coerce: extensionFormatCheck,
                describe: "extension for language files",
            }),
        )
        .option(
            "base-name",
            createYargsOption({
                alias: "b",
                describe: "pre-existing language to use as a base",
            }),
        ).argv;

    const name = program.languageName;
    const extension = program.languageExtension;
    const baseName = program.baseName;
    const baseExtension = program.baseExtension;

    console.log(`Making new language with name '${name}' and extension '${extension}'.`);
    console.log(`Basing it off of name '${baseName}' and extension '${baseExtension}'.`);

    createNewLanguage(
        {
            extension,
            name,
        },
        {
            extension: baseExtension,
            name: baseName,
        },
    );
};

main();
