import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to directory/upper/case.
 */
export class DirectoryLowerCaseConverter extends CaseStyleConverter {
    /**
     * @returns Filler between words in a conversion.
     */
    protected getBetweenWords(): string {
        return "/";
    }
}
