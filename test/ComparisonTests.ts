import { expect } from "chai";
import * as path from "path";

import { Gls } from "../lib/Gls";
import { CaseStyleConverterBag } from "../lib/Rendering/Casing/CaseStyleConverterBag";
import { NameSplitter } from "../lib/Rendering/Casing/NameSplitter";
import { Language } from "../lib/Rendering/Languages/Language";
import { readCommandFile, writeBaselineFile } from "./Files";

/**
 * Settings to run a comparison test.
 */
export interface ICommandComparisonTestSettings {
    /**
     * Whether to overwrite baselines with generated contents instead of asserting equality.
     */
    accept: boolean;

    /**
     * Path to the test file, excluding extension.
     */
    filePath: string;

    /**
     * Whether language files should be within a directory for each language.
     */
    languageDirectories: boolean;

    /**
     * Name of the language to test in.
     */
    languageName: string;

    /**
     * Whether to transform output file paths to language-style names.
     */
    transformFilePath?: boolean;
}

const caseStyleConverterBag = new CaseStyleConverterBag();
const nameSplitter = new NameSplitter();

const createLanguageFilePath = (settings: ICommandComparisonTestSettings, language: Language): string => {
    const prefix = settings.languageDirectories ? "" : language.general.name + "/";

    if (!settings.transformFilePath) {
        return prefix + settings.filePath + language.general.extension;
    }

    const basename = path.basename(settings.filePath);
    const projectPath = settings.filePath.substring(0, settings.filePath.length - basename.length);
    if (basename === "Main") {
        return projectPath + prefix + language.projects.mainFile;
    }

    const { extension, fileCase } = language.general;
    const nameSplit = nameSplitter.split(basename);
    const fileName = caseStyleConverterBag.convertToCase(fileCase, nameSplit) + extension;

    return projectPath + prefix + fileName;
};

const acceptCommandComparisonBaseline = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    const prefix = settings.languageDirectories ? "" : "Gls/";
    const gls = new Gls(settings.languageName);
    const language = gls.getLanguage();
    const commentMarker = language.syntax.comments.lineLeft;
    const source = await readCommandFile(prefix + settings.filePath + ".gls");
    const baseline = gls.convert(source);
    const languagePath = createLanguageFilePath(settings, language);

    console.log({ languagePath, sourcePath: prefix + settings.filePath + ".gls", prefix });
    await writeBaselineFile(languagePath, commentMarker, baseline);
};

const runCommandComparisonTest = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    // Arrange
    const prefix = settings.languageDirectories ? "" : "Gls/";
    const gls = new Gls(settings.languageName);
    const language = gls.getLanguage();
    const languagePath = createLanguageFilePath(settings, language);

    // Act
    console.log({ languagePath, other: prefix + settings.filePath + ".gls" });
    const [expected, source] = await Promise.all([readCommandFile(languagePath), readCommandFile(prefix + settings.filePath + ".gls")]);

    // Assert
    expect(gls.convert(source)).to.be.deep.equal(expected, languagePath);
};

/**
 * Runs tests for a single command scenario in a language.
 */
export const runCommandComparison = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    console.log("Command comparison", settings);
    if (settings.accept) {
        await acceptCommandComparisonBaseline(settings);
    } else {
        await runCommandComparisonTest(settings);
    }
};
