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
     * UpperCamelCase name of the project with periods between words.
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
     * Lines of text in the root project file name.
     */
    public fileFormat: string[];

    /**
     * Root file name storing project metadata fields.
     */
    public fileName: string;

    /**
     * How to represent the name in project metadata.
     */
    public nameFormat: CaseStyle;

    /**
     * File path to place root exports files, if usesRootExportsFile is true.
     */
    public rootExportsFileName: string;

    /**
     * Whether projects explicitly export objects through a root file.
     */
    public usesRootExportsFile: boolean;
}
