/**
 * Metadata on a language's variables.
 */
export class VariableProperties {
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
     * The keyword used for null/undefined.
     */
    public null: string;

    /**
     * Whether types should be put after variable names rather than before.
     */
    public typesAfterName: boolean;

    /**
     * How to start a variable's type name.
     */
    public typeLeft: string;
}
