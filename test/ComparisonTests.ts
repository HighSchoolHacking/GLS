import { expect } from "chai";

import { Gls } from "../lib/Gls";
import { readCommandFile, writeBaselineFile } from "./Files";

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

const acceptCommandComparisonBaseline = async (filePath: string, languageName: string): Promise<void> => {
    const gls = new Gls(languageName);
    const extension = gls.getLanguage().general.extension;
    const commentMarker = gls.getLanguage().syntax.comments.lineLeft;
    const source = await readCommandFile(filePath + ".gls");
    const baseline = gls.convert(source);

    await writeBaselineFile(filePath + extension, commentMarker, baseline);
};

const runCommandComparisonTest = async (filePath: string, languageName: string): Promise<void> => {
    // Arrange
    const gls = new Gls(languageName);
    const extension = gls.getLanguage().general.extension;

    // Act
    const [expected, source] = await Promise.all([readCommandFile(filePath + extension), readCommandFile(filePath + ".gls")]);

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
