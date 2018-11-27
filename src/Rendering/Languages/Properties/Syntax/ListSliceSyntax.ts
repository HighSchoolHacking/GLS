/**
 * Which forms of slices a language supports.
 */
export enum ListSliceSupport {
    /**
     * Just the index form is supported.
     */
    Index = 1,

    /**
     * Just the length form is supported.
     */
    Length = 2,
}

/**
 * Metadata on a language's list slicing syntax.
 */
export class ListSliceSyntax {
    /**
     * Characters before the caller in a slice call.
     */
    public before: string;

    /**
     * How to start a slice call.
     */
    public left: string;

    /**
     * Middle of a slice call if a second parameter is provided.
     */
    public middle: string;

    /**
     * End of a slice call.
     */
    public right: string;

    /**
     * Whether slices extend until going until an index or for a length.
     */
    public support: ListSliceSupport;

    /**
     * Default characters to start at if none are provided for a slice until the end of the list.
     */
    public untilEndDefaultStart: string;

    /**
     * How to start a slice until the end of the list.
     */
    public untilEndLeft: string;

    /**
     * Characters slice until the end of the list.
     */
    public untilEndMiddle: string;

    /**
     * How to end a slice from a non-zero index until the end of the list, with {0} for the name of the list and {1} for the starting index.
     */
    public untilEndRightFromIndex: string;

    /**
     * How to end a slice from 0 until the end of the list, with {0} for the name of the list and {1} for the starting index.
     */
    public untilEndRightFromStart: string;
}
