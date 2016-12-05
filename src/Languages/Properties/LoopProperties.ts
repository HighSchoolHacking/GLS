/**
 * Metadata on a language's loops.
 */
export class LoopProperties {
    /**
     * The keyword used for "break".
     */
    public break: string;

    /**
     * The keyword used for "continue".
     */
    public continue: string;

    /**
     * The keyword used for "for".
     */
    public for: string;

    /**
     * The keyword used for "foreach".
     */
    public foreach: string;

    /**
     * Whether foreach loops are a method, rather than a standard loop.
     */
    public forEachAsMethod: boolean;

    /**
     * How to end a foreach loop.
     */
    public forEachEnd: string;

    /**
     * How objects may give their listing of keys, such as ".Keys".
     */
    public forEachGetKeys: string;

    /**
     * How objects may give their listing of paired keys and values.
     */
    public forEachGetPairs: string;

    /**
     * The middle portion of a foreach loop's initial line.
     */
    public forEachMiddle: string;

    /**
     * The class name of foreach pairs, such as "KeyValuePair" or "MapEntry".
     */
    public forEachPairsPairClass: string;

    /**
     * Whether foreach loops iterate over keys.
     */
    public forEachPairsAsKeys: boolean;

    /**
     * Whether foreach loops iterate over pairs of items.
     */
    public forEachPairsAsPair: boolean;

    /**
     * How to retrieve a key from a foreach pair, such as ".Key" or ".getKey()".
     */
    public forEachPairsRetrieveKey: string;

    /**
     * How to retrieve a key from a foreach pair, such as ".Value" or ".getValue()".
     */
    public forEachPairsRetrieveValue: string;

    /**
     * How to end a foreach loop's initial line.
     */
    public forEachRight: string;

    /**
     * Starts itteration portion of foreach loop's initial line.
     */
    public forEachStartItteration: string;

    /**
     * Begins a for each start statement
     */
    public forEachStartLeft: string;

    /**
     * Separates itteration variable and array in a foreach loop's initial line.
     */
    public forEachStartSeparator: string;

    /**
     * Last part of a foreach loop's initial line.
     */
    public forEachStartRight: string;

    /**
     * Whether Pythonic ranged loops are used, rather than traditional C-like ones.
     */
    public rangedForLoops: boolean;

    /**
     * How to start a Pythonic ranged loop's initial line.
     */
    public rangedForLoopsLeft: string;

    /**
     * The separator between numbers inside Pythonic ranged loops.
     */
    public rangedForLoopsMiddle: string;

    /**
     * How to end a Pythonic ranged loop's initial line.
     */
    public rangedForLoopsRight: string;

    /**
     * The keyword used for "while".
     */
    public whileStartLeft: string;

    /**
     * The middle of a while start statement.
     */
    public whileStartMiddle: string;

    /**
     * The end of a while start statement".
     */
    public whileStartRight: string;
}
