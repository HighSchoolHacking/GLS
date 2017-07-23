import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to dash-lower-case.
 */
export class DashLowerCaseConverter extends CaseStyleConverter {
    /**
     * @returns Filler between words in a conversion.
     */
    protected getBetweenWords(): string {
        return "-";
    }
}
