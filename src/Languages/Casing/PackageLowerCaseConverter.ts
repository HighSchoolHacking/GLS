import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to "package.lower.case".
 */
export class PackageLowerCaseConverter extends CaseStyleConverter {
    /**
     * @returns Filler between words in a conversion.
     */
    protected getBetweenWords(): string {
        return ".";
    }
}
