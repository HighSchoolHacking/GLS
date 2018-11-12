import { Import } from "../../Imports/Import";
import { NativeCallSyntax } from "./NativeCallSyntax";

/**
 * Metadata on a language's set syntax.
 */
export class SetSyntax {
    /**
     * How to add an item to a set.
     */
    public add: NativeCallSyntax;

    /**
     * The name of the set class.
     */
    public className: string;

    /**
     * How to determine if an item exists in a set.
     */
    public contains: NativeCallSyntax;

    /**
     * Whether sets are initialized as class instances using "new".
     */
    public initializeAsNew: boolean;

    /**
     * How to start initializing a new dictionary's values.
     */
    public initializeStart: string;

    /**
     * Required imports to be able to use sets.
     */
    public requiredImports: Import[];

    /**
     * How to start declaring initial items in a set.
     */
    public startItemsLeft: string;

    /**
     * How to end declaring initial items in a set.
     */
    public startItemsRight: string;

    /**
     * How to declare a set without any items.
     */
    public startNoItems: string;

    /**
     * How to retrieve the items in a set as an array.
     */
    public toArray: NativeCallSyntax;

    /**
     * How to retrieve the items in a set as a list.
     */
    public toList: NativeCallSyntax;

    /**
     * How to start displaying types in a set type.
     */
    public typeLeft: string;

    /**
     * How to end displaying types in a dictionary type.
     */
    public typeRight: string;
}
