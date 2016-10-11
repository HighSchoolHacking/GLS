/**
 * Metadata on a language's in depth parameter properties.
 */
export class ParameterProperties {
    /**
     * Explicit rest parameter keyword.
     */
    public RestParamLeft: string;
    /**
     * Follows rest parameter keyword to check type.
     */
    public RestParamRight: string;
    /**
     * Declaration in the beginning.
     */
    public RestParamDeclarationLeft: boolean;
    /**
     * Declaration in the middle.
     */
    public RestParamDeclarationMiddle: boolean;
    /**
     * Declaration at the end.
     */
    public RestParamDeclarationRight: boolean;
}
