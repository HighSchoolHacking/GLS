import { ClassConstructorSyntax } from "./ClassConstructorSyntax";
import { ClassGenericSyntax } from "./ClassGenericSyntax";
import { ClassMemberSyntax } from "./ClassMemberSyntax";
import { ClassStaticSyntax } from "./ClassStaticSyntax";
import { NativeCallSyntax } from "./NativeCallSyntax";

/**
 * Metadata on a language's class syntax.
 */
export class ClassSyntax {
    /**
     * Prefix to mark a method as abstract.
     */
    public abstractDeclaration: string;

    /**
     * Whether abstract classes are supported.
     */
    public abstractsSupported: boolean;

    /**
     * Aliases of types, from raw GLS syntax to this language's equivalents.
     */
    public aliases: { [i: string]: string };

    /**
     * Metadata on constructors.
     */
    public constructors: ClassConstructorSyntax = new ClassConstructorSyntax();

    /**
     * The last line of a class declaration.
     */
    public declareEnd: string;

    /**
     * Characters before an inherited class declaration.
     */
    public declareExtendsLeft: string;

    /**
     * Characters after an inheritance declaration.
     */
    public declareExtendsRight: string;

    /**
     * Characters before an inherited interface declaration.
     */
    public declareImplementsLeft: string;

    /**
     * How to start the first line of a class declaration.
     */
    public declareStartLeft: string;

    /**
     * How to end the first line of a class declaration.
     */
    public declareStartRight: string;

    /**
     * Metadata on generic (templated) types.
     */
    public generics: ClassGenericSyntax = new ClassGenericSyntax();

    /**
     * How to check whether a variable is an instance of a class.
     */
    public instanceOf: NativeCallSyntax;

    /**
     * Metadata on member variables and functions.
     */
    public members: ClassMemberSyntax = new ClassMemberSyntax();

    /**
     * How to start declaring a new instance of a class, such as "new ".
     */
    public newStart: string;

    /**
     * Metadata on static variables and functions.
     */
    public statics: ClassStaticSyntax = new ClassStaticSyntax();

    /**
     * The keyword for calling a parent class constructor.
     */
    public superConstructor: string;

    /**
     * The keyword used for "this".
     */
    public this: string;
}
