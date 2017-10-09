import { NativeCallProperties } from "./NativeCallProperties";
import { StringFormatProperties } from "./StringFormatProperties";
import { StringSubstringProperties } from "./StringSubstringProperties";

/**
 * Metadata on a language's Strings.
 */
export class StringProperties {
    /**
     * How to create a lower-case copy of a string.
     */
    public caseLower: NativeCallProperties;

    /**
     * How to create an upper-case copy of a string.
     */
    public caseUpper: NativeCallProperties;

    /**
     * The name of the string class.
     */
    public className: string;

    /**
     * The name of the concatenation operator.
     */
    public concatenate: string;

    /**
     * Metadata on the language's string formatting.
     */
    public formatting: StringFormatProperties = new StringFormatProperties();

    /**
     * How to determine the index of a substring.
     */
    public index: NativeCallProperties;

    /**
     * How to retrieve a string's length.
     */
    public length: NativeCallProperties;

    /**
     * Metadata on the language's string substrings.
     */
    public substrings: StringSubstringProperties = new StringSubstringProperties();
}
