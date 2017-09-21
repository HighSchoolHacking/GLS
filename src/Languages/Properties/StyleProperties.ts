/**
 * Metadata on a language's style.
 */
export class StyleProperties {
    /**
     * Whether class method and public member names are in PascalCase
     * rather than camelCase.
     */
    public pascalCase: boolean;

    /**
     * How to end lines, such as "" or ";".
     */
    public semicolon: string;

    /**
     * Whether block-starting braces should be moved to the next line.
     */
    public separateBraceLines: boolean;
}
