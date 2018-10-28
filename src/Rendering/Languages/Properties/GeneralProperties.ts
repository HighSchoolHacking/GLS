import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's general properties.
 */
export class GeneralProperties {
    /**
     * The language's file extension.
     */
    public extension: string;

    /**
     * What case style files should be saved as.
     */
    public fileCasing: CaseStyle;

    /**
     * The common name of the language.
     */
    public name: string;
}
