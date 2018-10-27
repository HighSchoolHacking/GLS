import * as fs from "mz/fs";

import { LanguagesBag } from "../lib/Rendering/Languages/LanguagesBag";

export const testLanguagesBag = new LanguagesBag();

/**
 * Finds the comment marker for a language.
 *
 * @param extension   Extension of a language.
 * @returns Comment marker for the language.
 */
const getCommentMarker = (extension: string): string => {
    if (extension === ".gls") {
        return "-";
    }

    const language = testLanguagesBag.getLanguageByExtension(extension);
    const comment = language.syntax.comments.lineLeft;

    return comment.trim();
};

/**
 * Extracts the test case contents of a command file.
 *
 * @param filePath   Path to the file.
 * @returns Promise for lines of text for the file's test case.
 */
export const readCommandFile = async (filePath: string): Promise<string[]> => {
    const lines = (await fs.readFile(filePath))
        .toString()
        .replace(/\r/g, "")
        .split("\n");
    const extension = filePath.substring(filePath.lastIndexOf("."));
    const comment = getCommentMarker(extension);

    if (lines[0] !== comment) {
        throw new Error(`The first line in '${filePath}' should be a '${comment}' comment.`);
    }

    if (lines[lines.length - 1] !== "") {
        throw new Error(`The last line in a '${filePath}' case should be blank.`);
    }

    if (lines[lines.length - 2] !== comment) {
        throw new Error(`The last line in '${filePath}' should be a '${comment}' comment.`);
    }

    return lines.slice(1, lines.length - 2);
};
