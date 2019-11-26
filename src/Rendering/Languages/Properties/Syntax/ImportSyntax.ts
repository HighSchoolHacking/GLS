import { CaseStyle } from "../../Casing/CaseStyle";

/**
 * Metadata on a language's imports syntax.
 */
export class ImportSyntax {
    /**
     * Casing modifier for imports.
     */
    public case: CaseStyle;

    public caseNamespaces: CaseStyle;

    /**
     * Whether file names should be included from absolute imports.
     */
    public explicitAbsoluteFileName: boolean;

    /**
     * Whether individual items should be named.
     */
    public explicitItems: boolean;

    /**
     * Whether individual items should be on separate lines.
     */
    public explicitLines: boolean;

    /**
     * Whether items should come before package names.
     */
    public itemsBeforePackage: boolean;

    /**
     * Start of an import line for an absolute import.
     */
    public leftAbsolute: string;

    public rightAbsolute: string;

    public leftNamespace: string;

    /**
     * Start of an import line for a local import.
     */
    public leftLocal: string;

    public rightLocal: string;
    public rightNamespace: string;

    /**
     * Middle of an import line, between items and package.
     */
    public middle: string;

    /**
     * Whether the first part of paths should be removed for printing.
     */
    public removeFirstPathComponent: boolean;

    /**
     * Whether file names should be individually transformed in import paths.
     */
    public transformFileNames: boolean;

    /**
     * Whether local file imports should be treated differently from absolute imports.
     */
    public useLocalRelativeImports: boolean;

    /**
     * Whether local file imports should print "./"-style relative paths.
     */
    public useLocalRelativePaths: boolean;
}
