import { Import } from "../Imports/Import";

/**
 * Where native operations are called from.
 */
export enum NativeCallScope {
    /**
     * Called as a member of an array containing the parameters.
     */
    Array = "Array",

    /**
     * Called as a member of the calling object.
     */
    Member = "Member",

    /**
     * Called as an operator on or with the calling object.
     */
    Operator = "Operator",

    /**
     * Called as a global static.
     */
    Static = "Static",
}

/**
 * How native operations are called.
 */
export enum NativeCallType {
    /**
     * An operator floating to the left of its caller.
     */
    FloatingLeft = "FloatingLeft",

    /**
     * An operator floating to the right of its caller.
     */
    FloatingRight = "FloatingRight",

    /**
     * An operation that exists as a function.
     */
    Function = "Function",

    /**
     * An operation as a single property.
     */
    Property = "Property",
}

/**
 * Metadata on how to perform a native call, such as Array::push.
 */
export class NativeCallProperties {
    /**
     * Default arguments this may add as a function or static.
     */
    private static defaultArguments: string[] = [];

    /**
     * Default imports required for native command use.
     */
    private static defaultImports: Import[] = [];

    /**
     * Any arguments this may add as a function or static.
     */
    public arguments: string[];

    /**
     * Any imports required for native command use.
     */
    public imports: Import[];

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
    public constructor(name: string, scope: NativeCallScope, type: NativeCallType) {
        this.arguments = NativeCallProperties.defaultArguments;
        this.imports = NativeCallProperties.defaultImports;
        this.name = name;
        this.scope = scope;
        this.type = type;
    }

    /**
     * Sets the arguments this may use as a function or static.
     *
     * @param argument   Arguments this may use as a function or static.
     * @returns this
     */
    public withArguments(args: string[]): NativeCallProperties {
        this.arguments = args;
        return this;
    }

    /**
     * Sets the imports required for native command use.
     *
     * @param imports   Imports required for native command use.
     * @returns this
     */
    public withImports(imports: Import[]): NativeCallProperties {
        this.imports = imports;
        return this;
    }
}
