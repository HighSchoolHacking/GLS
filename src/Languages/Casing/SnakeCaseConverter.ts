import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to snake_case.
 */
export class SnakeCaseConverter extends CaseStyleConverter {
    /**
     * @returns Filler between words in a conversion.
     */
    protected getBetweenWords(): string {
        return "_";
    }
}
