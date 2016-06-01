/**
 * Metadata on a language's classes.
 */
export class ClassGenericProperties {
    /**
     * How to start declaring a class' generics.
     */
    left: string;

    /**
     * Characters between a class' generic names.
     */
    middle: string;

    /**
     * How to end declaring a class' generics.
     */
    right: string;

    /**
     * Whether the class uses generics.
     */
    used: boolean;
}
