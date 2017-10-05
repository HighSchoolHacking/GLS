import { Import } from "../Imports/Import";
import { NativeCallArgument } from "./NativeCallArgument";

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
    private static defaultArguments: NativeCallArgument[] = [];

    /**
     * Default imports commands require (none).
     */
    private static defaultImports: Import[] = [];

    /**
     * Default name for commands (empty).
     */
    private static defaultName = "";

    /**
     * Default text between arguments.
     */
    private static defaultSeparator = ", ";

    /**
     * Any arguments this may add as a function or static.
     */
    public arguments: NativeCallArgument[] = NativeCallProperties.defaultArguments;

    /**
     * Any imports this native command requires.
     */
    public imports: Import[] = NativeCallProperties.defaultImports;

    /**
     * What this is called.
     */
    public name: string = NativeCallProperties.defaultName;

    /**
     * Where this is called from.
     */
    public scope: NativeCallScope;

    /**
     * Text between arguments.
     */
    public separator: string = NativeCallProperties.defaultSeparator;

    /**
     * How this is called.
     */
    public type: NativeCallType;

    public withArguments(args: NativeCallArgument[]): NativeCallProperties {
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

    public withSeparator(separator: string): NativeCallProperties {
        this.separator = separator;
        return this;
    }

    public withType(type: NativeCallType): NativeCallProperties {
        this.type = type;
        return this;
    }
}
