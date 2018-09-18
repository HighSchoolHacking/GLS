import { CaseStyle } from "../Casing/CaseStyle";

export interface IGlsProjectMetadata {
    /**
     * Name of the overall project author.
     */
    author: string;

    /**
     * Friendly sentence describing the project.
     */
    description: string;

    /**
     * Contact email for the project.
     */
    email: string;

    /**
     * Shorthand name for the license type.
     */
    license: string;

    /**
     * Package.Upper.Case name of the project.
     */
    name: string;

    /**
     * Source control system storing file history.
     */
    repositoryType: string;

    /**
     * Website where the project is hosted.
     */
    url: string;

    /**
     * Major.Minor.Patch semantic version.
     */
    version: string;
}

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
