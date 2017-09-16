/**
 * Metadata on a language's in depth interface properties.
 */
export class InterfaceProperties {
    /**
     * Ends interface declaration.
     */
    public declareEnd: string;

    /**
     * Keyword that indicates to extend from parent interfaces.
     */
    public declareExtendsLeft: string;

    /**
     * Seperator of multiple parent interfaces.
     */
    public declareExtendsRight: string;

    /**
     * Whether the implements keyword needs to be explicitly called after a class has been extended.
     */
    public declareImplementsExplicit: boolean;

    /**
     * Starts method declaration.
     */
    public declareMethodLeft: string;

    /**
     * Middle of method declaration.
     */
    public declareMethodMiddle: string;

    /**
     * End of method declaration.
     */
    public declareMethodRight: string;

    /**
     * Keyword that indicates interface declaration.
     */
    public declareStartLeft: string;

    /**
     * Starts interface declaration.
     */
    public declareStartRight: string;

    /**
     * Whether the method type is declared after the method is define.
     */
    public methodTypeAfter: boolean;

    /**
     * Whether the language supports interfaces.
     */
    public supported: boolean;
}
