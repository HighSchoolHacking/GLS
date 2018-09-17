import { NativeCallSyntax } from "./NativeCallSyntax";

/**
 * Metadata on a language's array syntax.
 */
export class ArraySyntax {
    /**
     * The name of the array class.
     */
    public className: string;

    /**
     * Whether arrays are initialized as class instances using "new".
     */
    public initializeAsNew: boolean;

    /**
     * Whether initializing a new array requires specifying its type.
     */
    public initializeByType: boolean;

    /**
     * Whether initialization is done as a static method of the array class.
     */
    public initializeViaStatic: boolean;

    /**
     * How to retrieve an array's length.
     */
    public length: NativeCallSyntax;
}
