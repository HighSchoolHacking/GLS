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
     * Whether type declaration occurs before the keyword.
     */
    public restDeclarationLeft: boolean;

    /**
     * Whether type declaration occurs after the keyword but before array name.
     */
    public restDeclarationMiddle: boolean;

    /**
     * Whether type declaration occurs after array name.
     */
    public restDeclarationRight: boolean;
}
