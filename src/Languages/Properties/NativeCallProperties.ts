import { Import } from "../Imports/Import";

/**
 * Where native operations are called from.
 */
export enum NativeCallScope {
    /**
     * Called as a member of an array containing the parameters.
     */
    Array,

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
     * Default arguments to pass to function calls (none).
     */
    private static defaultArguments: string[] = [];

    /**
     * Default imports commands require (none).
     */
    private static defaultImports: Import[] = [];

    /**
     * Any arguments this may add as a function or static.
     */
    public arguments: string[] = NativeCallProperties.defaultArguments;

    /**
     * Any imports this native command requires.
     */
    public imports: Import[] = NativeCallProperties.defaultImports;

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

    public withArguments(args: string[]): NativeCallProperties {
        this.arguments = args;
        return this;
    }

    public withImports(imports: Import[]): NativeCallProperties {
        this.imports = imports;
        return this;
    }

    public withName(name: string): NativeCallProperties {
        this.name = name;
        return this;
    }

    public withScope(scope: NativeCallScope): NativeCallProperties {
        this.scope = scope;
        return this;
    }

    public withType(type: NativeCallType): NativeCallProperties {
        this.type = type;
        return this;
    }
}
