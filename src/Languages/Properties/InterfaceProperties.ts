/**
 * Metadata on a language's in depth interface properties.
 */
export class InterfaceProperties {
    /**
     * Keyword that indicates interface declaration.
     */
    public declareStartLeft: string;

    /**
     * Starts interface declaration.
     */
    public declareStartRight: string;

    /**
     * Keyword that indicates to extend from parent interfaces.
     */
    public declareExtendsLeft: string;

    /**
     * Seperator of multiple parent interfaces.
     */
    public declareExtendsRight: string;

    /**
     * Ends interface declaration.
     */
    public declareEnd: string;

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
     * Whether the method type is declared after the method is define.
     */
    public methodTypeAfter: boolean;

    /**
     * Whether the language supports interfaces.
     */
    public supported: boolean;
}
