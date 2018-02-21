/**
 * Which forms of substrings a language supports.
 */
export enum StringSubstringSupport {
    /**
     * Both the length and index forms are supported.
     */
    Both,

    /**
     * Just the index form is supported.
     */
    Index,

    /**
     * Just the length form is supported.
     */
    Length
}

/**
 * Metadata on a language's string substrings.
 */
export class StringSubstringProperties {
    /**
     * Default second parameter if one isn't provided.
     */
    public defaultEnd: string;

    /**
     * How to start a substring index call.
     */
    public leftIndex: string;

    /**
     * How to start a substring length call.
     */
    public leftLength: string;

    /**
     * Middle of a substring call if a second parameter is provided.
     */
    public middle: string;

    /**
     * End of a substring call.
     */
    public right: string;

    /**
     * Whether substrings extend until an index, instead of a length.
     */
    public support: StringSubstringSupport;
}
