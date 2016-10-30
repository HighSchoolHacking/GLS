import { ClassGenericProperties } from "./ClassGenericProperties";
import { ClassMemberProperties } from "./ClassMemberProperties";

/**
 * Metadata on a language's classes.
 */
export class ClassProperties {
    /**
     * Aliases of types, from raw GLS syntax to this language's equivalents.
     */
    public aliases: { [i: string]: string };

    /**
     * The keyword used for constructors, if not the class name.
     */
    public constructorKeyword: string;

    /**
     * Whether constructors take in the class instance as a first parameter.
     */
    public constructorTakesThis: boolean;

    /**
     * Whether constructors are named with a keyword, rather than the class name.
     */
    public constructorUsesKeyword: boolean;

    /**
     * Characters before an inherited class declaration.
     */
    public declareExtendsLeft: string;

    /**
     * Characters before an inherited interface declaration.
     */
    public declareImplementsLeft: string;

    /**
     * Characters after an inheritance declaration.
     */
    public declareExtendsRight: string;

    /**
     * The last line of a class declaration.
     */
    public declareEnd: string;

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
     * Metadata on class member variables and functions.
     */
    public members: ClassMemberProperties = new ClassMemberProperties();

    /**
     * How to start declaring a new instance of a class, such as "new ".
     */
    public newStart: string;

    /**
     * The keyword for a static class or member.
     */
    public staticLabel: string;

    /**
     * The keyword for calling a parent class constructor.
     */
    public superConstructor: string;

    /**
     * The keyword used for "this".
     */
    public this: string;
}
