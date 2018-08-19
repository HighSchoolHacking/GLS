/**
 * What kind of syntactical form new object instantiations follow.
 */
export enum NewInstantiationSyntaxKind {
    /**
     * Called as a member of an array containing the parameters.
     */
    Prefix = "Prefix",

    /**
     * Called as a member of the calling object.
     */
    MethodCall = "MethodCall",

    /**
     * Called as an operator on or with the calling object.
     */
    MemberMethodCall = "MemberMethodCall"
}

/**
 * Metadata on how to perform a native call, such as Array::push.
 */
export class NewProperties {
    /**
     * What kind of syntactical form is used for new object instantiations.
     */
    public instantiationKind: NewInstantiationSyntaxKind;

    /**
     * The keyword used to instantiate a new object.
     */
    public keyword: string;
}
