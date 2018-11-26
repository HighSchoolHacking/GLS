/**
 * Metadata on a language's class export syntax.
 */
export class ExportSyntax {
    /**
     * Whether exports exports include the name of exported items.
     */
    public exportedIncludesName: boolean;

    /**
     * Text before an exported class declaration and any printed name.
     */
    public exportedLeft: string;

    /**
     * Text before an exported class declaration and after any printed name.
     */
    public exportedMiddle: string;

    /**
     * Text before an internal class declaration.
     */
    public internal: string;
}
