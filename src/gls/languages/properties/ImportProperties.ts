import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's imports.
 */
export class ImportProperties {
    /**
     * Casing modifier for package names.
     */
    public case: CaseStyle;

    /**
     * Whether individual items should be named.
     */
    public explicit: boolean;

    /**
     * Whether individual items should be on separate lines.
     */
    public explicitLines: boolean;

    /**
     * Whether items should come before package names.
     */
    public itemsBeforePackage: boolean;

    /**
     * Start of an import line.
     */
    public left: string;

    /**
     * Middle of an import line, between items and package.
     */
    public middle: string;

    /**
     * End of an import line.
     */
    public right: string;
}
