import * as fs from "fs";
import * as path from "path";

import { LanguagesBag } from "../lib/Languages/LanguagesBag";

/**
 * Reads contents of test case files.
 */
export class FilesReader {
    /**
     * Lookup of standard languages.
     */
    private readonly languagesBag: LanguagesBag;

    /**
     * Disk root path for test files.
     */
    private readonly rootPath: string;

    /**
     * Initializes a new instance of the FilesReader class.
     *
     * @param languagesBag   Lookup of standard languages.
     * @param rootPath   Disk root path for test files.
     */
    public constructor(languagesBag: LanguagesBag, rootPath: string) {
        this.languagesBag = languagesBag;
        this.rootPath = rootPath;
    }

    /**
     * Extracts the test case contents of a command file.
     *
     * @param command   Name of the parent command directory.
     * @param name   Name of the test file.
     * @returns Lines of text for the file's test case.
     */
    public readCommandFile(command: string, name: string): string[] {
        const filePath = path.resolve(this.rootPath, command, name);
        const lines = fs.readFileSync(filePath).toString().replace(/\r/g, "").split("\n");
        const extension = name.substring(name.indexOf("."));
        const comment = this.getCommentMarker(extension);

        if (lines[0] !== comment) {
            throw new Error(`The first line in '${name}' should be a '${comment}' comment.`);
        }

        if (lines[lines.length - 1] !== "") {
            throw new Error("The last line in a test case should be blank.");
        }

        if (lines[lines.length - 2] !== comment) {
            throw new Error(`The last line in '${name}' should be a '${comment}' comment.`);
        }

        return lines.slice(1, lines.length - 2);
    }

    /**
     * Finds the comment marker for a language.
     *
     * @param extension   Extension of a language.
     * @returns Comment marker for the language.
     */
    private getCommentMarker(extension: string): string {
        if (extension === ".gls") {
            return "-";
        }

        const language = this.languagesBag.getLanguageByExtension(extension);
        const comment = language.properties.comments.lineLeft;

        return comment.trim();
    }
}
