import { expect } from "chai";

import { Gls } from "../lib/Gls";
import { readCommandFile } from "./FileReading";

/**
 * Runs tests for a single command scenario in a language.
 *
 * @param languageName   Name of the language to test in.
 * @param filePath   Path to the test file, excluding extension.
 * @param expectedsDirectory   Directory containing expected outputs, if a sub-directory.
 */
export const runCommandComparisonTest = async (languageName: string, filePath: string): Promise<void> => {
    // Arrange
    const gls = new Gls(languageName);
    const extension = gls.getLanguage().general.extension;

    // Act
    const [expected, source] = await Promise.all([readCommandFile(filePath + extension), readCommandFile(filePath + ".gls")]);

    // Assert
    expect(gls.convert(source)).to.be.deep.equal(expected, `${filePath}${extension}`);
};
