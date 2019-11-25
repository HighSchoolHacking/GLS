import { Import } from "../../Imports/Import";
import { NativeCallSyntax } from "./NativeCallSyntax";

/**
 * Metadata on a language's dictionary syntax.
 */
export class DictionarySyntax {
    /**
     * The name of the dictionary class.
     */
    public className: string;

    /**
     * How to determine if a key exists in a dictionary.
     */
    public containsKey: NativeCallSyntax;

    /**
     * How to start getting a keyed value.
     */
    public getLeft: string;

    /**
     * How to end getting a keyed value.
     */
    public getRight: string;

    /**
     * Whether dictionaries are initialized as class instances using "new".
     */
    public initializeAsNew: boolean;

    /**
     * How dictionaries are initialized as raw variable types (without "new").
     */
    public initializeAsLiteral: string;

    /**
     * How to end initializing a new dictionary's values.
     */
    public initializeEnd: string;

    /**
     * How to start initializing the start of a new dictionary's values.
     */
    public initializeNewStart: string;

    /**
     * How to end a new dictionary's in-place value.
     */
    public initializePairComma: string;

    /**
     * How to start an in-place pair initialization.
     */
    public initializePairLeft: string;

    /**
     * Characters in the middle of an in-place pair initialization.
     */
    public initializePairMiddle: string;

    /**
     * How to end an in-place pair initialization.
     */
    public initializePairRight: string;

    /**
     * How to start initializing a new dictionary's values.
     */
    public initializeStart: string;

    /**
     * How to retrieve all keys from a dictionary as an array.
     */
    public keys: NativeCallSyntax;

    /**
     * Required imports to be able to use dictionaries.
     */
    public requiredImports: Import[];

    /**
     * How to start setting a keyed value.
     */
    public setLeft: string;

    /**
     * Characters in the middle of setting a keyed value.
     */
    public setMiddle: string;

    /**
     * How to end setting a keyed value.
     */
    public setRight: string;

    /**
     * How to start displaying types in a dictionary type.
     */
    public typeLeft: string;

    /**
     * Characters in the middle of types in a dictionary type.
     */
    public typeMiddle: string;

    /**
     * How to end displaying types in a dictionary type.
     */
    public typeRight: string;
}
