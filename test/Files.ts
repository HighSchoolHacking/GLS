import * as fs from "mz/fs";
import * as path from "path";

// https://github.com/ahmadnassri/mkdirp-promise/issues/84
// tslint:disable-next-line:no-require-imports
import mkdirpPromise = require("mkdirp-promise");

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
 * @param useWrappingComments   Whether the first and last line should be the language's comment marker.
 * @returns Promise for lines of text for the file's test case.
 */
export const readCommandFile = async (filePath: string, useWrappingComments?: boolean): Promise<string[]> => {
    const extension = filePath.substring(filePath.lastIndexOf("."));
    let lines = (await fs.readFile(filePath))
        .toString()
        .replace(/\r/g, "")
        .split("\n");

    if (lines[lines.length - 1] !== "") {
        throw new Error(`The last line of the a '${filePath}' case should be blank.`);
    }

    if (useWrappingComments) {
        const comment = getCommentMarker(extension);

        if (lines[0] !== comment) {
            throw new Error(`The first line in '${filePath}' should be a '${comment}' comment, not '${lines[0]}'.`);
        }

        if (lines[lines.length - 2] !== comment) {
            throw new Error(`The last line in '${filePath}' should be a '${comment}' comment, not '${lines[0]}'.`);
        }

        lines = lines.slice(1, lines.length - 2);
    } else {
        lines = lines.slice(0, lines.length - 1);
    }

    return lines;
};

/**
 * Writes acceptance of a baseline file, borded by comment markers.
 *
 * @param filePath   Path to the file.
 * @param contents   Lines of content to add between comment markers.
 * @param commentMarker   Comment marker for the test language.
 * @returns Promise for writing to the file.
 */
export const writeBaselineFile = async (filePath: string, contents: string[], commentMarker: string | undefined): Promise<void> => {
    if (commentMarker !== undefined) {
        contents = [commentMarker.trim(), ...contents, commentMarker.trim(), ""];
    } else {
        contents = [...contents, ""];
    }

    await mkdirpPromise(path.dirname(filePath));
    await fs.writeFile(filePath, contents.join("\n"));
};
