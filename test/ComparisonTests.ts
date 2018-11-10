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
     * Name of the test file, excluding extension.
     */
    sourceFileName: string;

    /**
     * Name of the language to test in.
     */
    languageName: string;

    /**
     * Directory path to read expected and write created language files in.
     */
    outputDirectory: string;

    /**
     * Directory path to read GLS files from.
     */
    sourceDirectory: string;

    /**
     * Root project directory this is working under.
     */
    projectDirectory: string;

    /**
     * Whether to transform output file paths to language-style names.
     */
    transformFilePath?: boolean;
}

const caseStyleConverterBag = new CaseStyleConverterBag();
const nameSplitter = new NameSplitter();

const createLanguageFilePath = (settings: ICommandComparisonTestSettings, language: Language): string => {
    if (!settings.transformFilePath) {
        return path.join(settings.outputDirectory, settings.sourceFileName + language.general.extension);
    }

    const basename = path.basename(settings.sourceFileName);
    if (basename === "Main") {
        return path.join(settings.outputDirectory, language.projects.mainFile);
    }

    const { extension, fileCase } = language.general;
    const nameSplit = nameSplitter.split(basename);
    const fileName = caseStyleConverterBag.convertToCase(fileCase, nameSplit) + extension;

    return path.join(settings.outputDirectory, fileName);
};

const acceptCommandComparisonBaseline = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    const sourceFilePath = path.join(settings.sourceDirectory, settings.sourceFileName + ".gls");
    const gls = new Gls(settings.languageName);
    const language = gls.getLanguage();
    const commentMarker = language.syntax.comments.lineLeft;
    const source = await readCommandFile(sourceFilePath);

    const baseline = gls.convert(source);
    const languagePath = createLanguageFilePath(settings, language);

    await writeBaselineFile(languagePath, commentMarker, baseline);
};

const runCommandComparisonTest = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    // Arrange
    const gls = new Gls(settings.languageName);
    const language = gls.getLanguage();
    const languagePath = createLanguageFilePath(settings, language);
    const sourceFilePath = path.join(settings.sourceDirectory, settings.sourceFileName + ".gls");

    // Act
    const [expected, source] = await Promise.all([readCommandFile(languagePath), readCommandFile(sourceFilePath)]);

    // Assert
    expect(gls.convert(source)).to.be.deep.equal(expected, languagePath);
};

/**
 * Runs tests for a single command scenario in a language.
 */
export const runCommandComparison = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    if (settings.accept) {
        await acceptCommandComparisonBaseline(settings);
    } else {
        await runCommandComparisonTest(settings);
    }
};
