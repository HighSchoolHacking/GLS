import { ClassConstructorProperties } from "./ClassConstructorProperties";
import { ClassGenericProperties } from "./ClassGenericProperties";
import { ClassMemberProperties } from "./ClassMemberProperties";
import { ClassStaticProperties } from "./ClassStaticProperties";

/**
 * Metadata on a language's classes.
 */
export class ClassProperties {
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
    public constructors: ClassConstructorProperties = new ClassConstructorProperties();

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
    public generics: ClassGenericProperties = new ClassGenericProperties();

    /**
     * Metadata on member variables and functions.
     */
    public members: ClassMemberProperties = new ClassMemberProperties();

    /**
     * How to start declaring a new instance of a class, such as "new ".
     */
    public newStart: string;

    /**
     * Metadata on static variables and functions.
     */
    public statics: ClassStaticProperties = new ClassStaticProperties();

    /**
     * The keyword for calling a parent class constructor.
     */
    public superConstructor: string;

    /**
     * The keyword used for "this".
     */
    public this: string;
}
