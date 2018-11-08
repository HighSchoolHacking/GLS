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
}

const caseStyleConverterBag = new CaseStyleConverterBag();
const nameSplitter = new NameSplitter();

const createLanguageFilePath = (filePath: string, language: Language): string => {
    const { extension, fileCase } = language.general;
    const basename = path.basename(filePath);
    const nameSplit = nameSplitter.split(basename);
    const fileName = caseStyleConverterBag.convertToCase(fileCase, nameSplit) + extension;

    return filePath.substring(0, filePath.length - basename.length) + fileName;
};

const acceptCommandComparisonBaseline = async (filePath: string, languageName: string): Promise<void> => {
    const gls = new Gls(languageName);
    const language = gls.getLanguage();
    const commentMarker = language.syntax.comments.lineLeft;
    const source = await readCommandFile(filePath + ".gls");
    const baseline = gls.convert(source);
    const languagePath = createLanguageFilePath(filePath, language);

    await writeBaselineFile(languagePath, commentMarker, baseline);
};

const runCommandComparisonTest = async (filePath: string, languageName: string): Promise<void> => {
    // Arrange
    const gls = new Gls(languageName);
    const language = gls.getLanguage();
    const extension = language.general.extension;
    const languagePath = createLanguageFilePath(filePath, language);

    // Act
    const [expected, source] = await Promise.all([readCommandFile(languagePath), readCommandFile(filePath + ".gls")]);

    // Assert
    expect(gls.convert(source)).to.be.deep.equal(expected, `${filePath}${extension}`);
};

/**
 * Runs tests for a single command scenario in a language.
 */
export const runCommandComparison = async ({ accept, filePath, languageName }: ICommandComparisonTestSettings): Promise<void> => {
    if (accept) {
        await acceptCommandComparisonBaseline(filePath, languageName);
    } else {
        await runCommandComparisonTest(filePath, languageName);
    }
};
