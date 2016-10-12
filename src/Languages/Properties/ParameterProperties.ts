/**
 * Metadata on a language's in depth parameter properties.
 */
export class ParameterProperties {
    /**
     * Explicit rest parameter keyword.
     */
    public restParamLeft: string;
    /**
     * Follows rest parameter keyword to check type.
     */
    public restParamRight: string;
    /**
     * Declaration in the beginning.
     */
    public restParamDeclarationLeft: boolean;
    /**
     * Declaration in the middle.
     */
    public restParamDeclarationMiddle: boolean;
    /**
     * Declaration at the end.
     */
    public restParamDeclarationRight: boolean;
}
