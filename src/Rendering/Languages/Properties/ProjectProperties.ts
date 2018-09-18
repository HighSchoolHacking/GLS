import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's project schemas.
 */
export class ProjectProperties {
    /**
     * Lines of text in each generated root file, keyed by name.
     */
    public metadataFiles: { [i: string]: string[] };

    /**
     * How to represent a project's name in metadata files.
     */
    public nameFormat: CaseStyle;
}
