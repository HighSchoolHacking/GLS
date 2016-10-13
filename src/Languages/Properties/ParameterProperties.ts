/**
 * Metadata on a language's in depth parameter properties.
 */
export class ParameterProperties {

    /**
     * Whether type declaration occurs after the array name.
     */
    public restDeclarationAfter: boolean;

    /**
     * Whether type declaration is necessary.
     */
    public restDeclarationType: boolean;

    /**
     * The rest parameter keyword before type declaration.
     */
    public restKeywordLeft: string;

    /**
     * The rest parameter keyword after type declaration but before the array name.
     */
    public restKeywordMiddle: string;

    /**
     * The rest parameter keyword after the array name.
     */
    public restKeywordRight: string;
}
