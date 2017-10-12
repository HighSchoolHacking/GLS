import { Import } from "../Imports/Import";
import { NativeCallProperties } from "./NativeCallProperties";

/**
 * Metadata on a language's sets.
 */
export class SetProperties {
    /**
     * How to add an item to a set.
     */
    public add: NativeCallProperties;

    /**
     * The name of the set class.
     */
    public className: string;

    /**
     * How to determine if an item exists in a set.
     */
    public contains: NativeCallProperties;

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
     * How to retrieve the items in a set as an array.
     */
    public toArray: NativeCallProperties;

    /**
     * How to retrieve the items in a set as a list.
     */
    public toList: NativeCallProperties;

    /**
     * How to start displaying types in a set type.
     */
    public typeLeft: string;

    /**
     * How to end displaying types in a dictionary type.
     */
    public typeRight: string;
}
