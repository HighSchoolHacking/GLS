import { Import } from "../../Imports/Import";

/**
 * Metadata on a language's inline lambda type syntax.
 */
export class LambdaTypeInlineSyntax {
    /**
     * Whether to include parameter names before their types.
     */
    public includeParameterNames: boolean;

    /**
     * How to start inline types, by how many parameters are allowed.
     */
    public leftByParameterCount: string[];

    /**
     * Middle characters of a type without parameters.
     */
    public middleWithoutParameters: string;

    /**
     * Middle characters of a type with parameters.
     */
    public middleWithParameters: string;

    /**
     * Required imports to be able to use inline lambda types.
     */
    public requiredImports: Import[];

    /**
     * How to end inline types.
     */
    public right: string;
}
