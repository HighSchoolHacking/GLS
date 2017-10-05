import { NativeCallProperties } from "./NativeCallProperties";

/**
 * Metadata on a language's string substrings.
 */
export class StringSubstringProperties {
    /**
     * How to retrieve a section of a string of a length.
     */
    public index: NativeCallProperties;

    /**
     * How to retrieve a section of a string until an index.
     */
    public length: NativeCallProperties;
}
