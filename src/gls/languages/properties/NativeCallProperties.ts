/**
 * Where native operations are called from.
 */
export enum NativeCallScope {
    /**
     * Called as a member of the calling object.
     */
    Member,

    /**
     * Called as an operator on or with the calling object.
     */
    Operator,

    /**
     * Called as a global static.
     */
    Static
}

/**
 * How native operations are called.
 */
export enum NativeCallType {
    /**
     * An operator floating to the left of its caller.
     */
    FloatingLeft,

    /**
     * An operator floating to the right of its caller.
     */
    FloatingRight,

    /**
     * An operation that exists as a function.
     */
    Function,

    /**
     * An operation as a single property.
     */
    Property
}

/**
 * Metadata on how to perform a native call, such as Array::push.
 */
export class NativeCallProperties {
    /**
     * What this is called.
     */
    public name: string;

    /**
     * Where this is called from.
     */
    public scope: NativeCallScope;

    /**
     * How this is called.
     */
    public type: NativeCallType;
    
    /**
     * Initializes a new instance of the NativeCallProperties class.
     * 
     * @param name   What this is called.
     * @param scope   Where this is called from.
     * @param type   How this is called.
     */
    constructor(name: string, scope: NativeCallScope, type: NativeCallType) {
        this.name = name;
        this.scope = scope;
        this.type = type;
    }
}
