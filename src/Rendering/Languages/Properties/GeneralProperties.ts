import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's general properties.
 */
export class GeneralProperties {
    /**
     * What case style directory paths should be saved as.
     */
    public directoryCase: CaseStyle;

    /**
     * The language's file extension.
     */
    public extension: string;

    /**
     * What case style files should be saved as.
     */
    public fileCase: CaseStyle;

    /**
     * The common name of the language.
     */
    public name: string;
}
