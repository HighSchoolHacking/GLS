import { expect } from "chai";
import * as path from "path";

import { Budgie } from "../lib/Budgie";
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
     * Directory path to read Budgie files from.
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

    /**
     * Whether the first and last line should be the language's comment marker.
     */
    useWrappingComments?: boolean;
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

    const { directoryCase, extension, fileCase } = language.general;
    const fileName = caseStyleConverterBag.convertToCase(fileCase, nameSplitter.split(basename)) + extension;

    const subDirectoryRaw = settings.sourceFileName.substring(0, settings.sourceFileName.length - basename.length - 1);
    const subDirectory = caseStyleConverterBag.convertToCase(directoryCase, nameSplitter.split(subDirectoryRaw));

    return path.join(settings.outputDirectory, subDirectory, fileName);
};

const acceptCommandComparisonBaseline = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    const sourceFilePath = path.join(settings.sourceDirectory, settings.sourceFileName + ".bg");
    const budgie = new Budgie(settings.languageName);
    const language = budgie.getLanguage();
    const commentMarker = settings.useWrappingComments ? language.syntax.comments.lineLeft : undefined;
    const source = await readCommandFile(sourceFilePath, settings.useWrappingComments);

    const baseline = budgie.convert(source);
    const languagePath = createLanguageFilePath(settings, language);

    await writeBaselineFile(languagePath, baseline, commentMarker);
};

const runCommandComparisonTest = async (settings: ICommandComparisonTestSettings): Promise<void> => {
    // Arrange
    const budgie = new Budgie(settings.languageName);
    const language = budgie.getLanguage();
    const languagePath = createLanguageFilePath(settings, language);
    const sourceFilePath = path.join(settings.sourceDirectory, settings.sourceFileName + ".bg");

    // Act
    const [expected, source] = await Promise.all([
        readCommandFile(languagePath, settings.useWrappingComments),
        readCommandFile(sourceFilePath, settings.useWrappingComments),
    ]);

    // Assert
    expect(budgie.convert(source)).to.be.deep.equal(expected, languagePath);
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
