/**
 * Metadata on a language's variable syntax.
 */
export class VariableSyntax {
    /**
     * Aliases of values, from raw GLS syntax to this language's equivalents.
     */
    public aliases: { [i: string]: string };

    /**
     * How to start a type cast.
     */
    public castLeft: string;

    /**
     * How to end a type cast.
     */
    public castRight: string;

    /**
     * How to start declaring a variable.
     */
    public declaration: string;

    /**
     * Whether variables must be declared before usage.
     */
    public declarationRequired: boolean;

    /**
     * Whether types are explicitly stated with declarations.
     */
    public explicitTypes: boolean;

    /**
     * Precedes variable when negatively checking for null.
     */
    public isNotNullLeft: string;

    /**
     * Middle portion of expression when negatively checking for null.
     */
    public isNotNullMiddle: string;

    /**
     * Precedes variable when positively checking for null.
     */
    public isNullLeft: string;

    /**
     * Middle portion of expression when positively checking for null.
     */
    public isNullMiddle: string;

    /**
     * The keyword used for null/undefined.
     */
    public null: string;

    /**
     * Explicit null to check variable against.
     */
    public nullRight: string;

    /**
     * How to start a variable's type name.
     */
    public typeLeft: string;

    /**
     * Whether types should be put after variable names rather than before.
     */
    public typesAfterName: boolean;
}
