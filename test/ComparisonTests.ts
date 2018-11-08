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
    if (!settings.transformFilePath) {
        return settings.filePath + language.general.extension;
    }

    const { extension, fileCase } = language.general;
    const basename = path.basename(settings.filePath);
    const nameSplit = nameSplitter.split(basename);
    const fileName = caseStyleConverterBag.convertToCase(fileCase, nameSplit) + extension;

    return settings.filePath.substring(0, settings.filePath.length - basename.length) + fileName;
};

const acceptCommandComparisonBaseline = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    const gls = new Gls(settings.languageName);
    const language = gls.getLanguage();
    const commentMarker = language.syntax.comments.lineLeft;
    const source = await readCommandFile(settings.filePath + ".gls");
    const baseline = gls.convert(source);
    const languagePath = createLanguageFilePath(settings, language);

    await writeBaselineFile(languagePath, commentMarker, baseline);
};

const runCommandComparisonTest = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    // Arrange
    const gls = new Gls(settings.languageName);
    const language = gls.getLanguage();
    const languagePath = createLanguageFilePath(settings, language);

    // Act
    const [expected, source] = await Promise.all([readCommandFile(languagePath), readCommandFile(settings.filePath + ".gls")]);

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
