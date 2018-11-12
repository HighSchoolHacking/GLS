import { Import } from "../../Imports/Import";
import { ListNewSizedSyntax } from "./ListNewSizedSyntax";
import { NativeCallSyntax } from "./NativeCallSyntax";

/**
 * Metadata on a language's list syntax.
 */
export class ListSyntax {
    /**
     * Adds two lists together.
     */
    public addList: NativeCallSyntax;

    /**
     * Whether the language uses flexible arrays.
     */
    public asArray: boolean;

    /**
     * The name of the list class.
     */
    public className: string;

    /**
     * How to retrieve the length of a list.
     */
    public length: NativeCallSyntax;

    /**
     * Metadata on fixed size list creation.
     */
    public newSized: ListNewSizedSyntax = new ListNewSizedSyntax();

    /**
     * How to remove an element from the end of a list.
     */
    public pop: NativeCallSyntax;

    /**
     * How to remove an element from the front of a list.
     */
    public popFront: NativeCallSyntax;

    /**
     * How to add an element to the end of a list.
     */
    public push: NativeCallSyntax;

    /**
     * Required imports to be able to use lists.
     */
    public requiredImports: Import[];

    /**
     * How to sort a list in-place.
     */
    public sort: NativeCallSyntax;
}
