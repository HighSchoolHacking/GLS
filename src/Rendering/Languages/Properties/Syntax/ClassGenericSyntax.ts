/**
 * Metadata on a language's class syntax.
 */
export class ClassGenericSyntax {
    /**
     * How to start declaring a class' generics.
     */
    public left: string;

    /**
     * Characters between a class' generic names.
     */
    public middle: string;

    /**
     * How to end declaring a class' generics.
     */
    public right: string;

    /**
     * Whether the class uses generics.
     */
    public used: boolean;
}
