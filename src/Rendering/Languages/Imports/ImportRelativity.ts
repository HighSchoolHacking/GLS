/**
 * Whether an import is from an absolute package or local file.
 */
export enum ImportRelativity {
    /**
     * The import is from an absolute package.
     */
    Absolute = "Absolute",

    /**
     * The import is from a local file.
     */
    Local = "Local",
}
