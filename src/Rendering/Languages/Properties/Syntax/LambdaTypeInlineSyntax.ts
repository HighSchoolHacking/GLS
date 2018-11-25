/**
 * Metadata on a language's inline lambda type syntax.
 */
export class LambdaTypeInlineSyntax {
    /**
     * Whether to include parameter names before their types.
     */
    public includeParameterNames: boolean;

    public leftByParameterCount: string[];

    public middleWithoutParameters: string;
    public middleWithParameters: string;

    public right: string;
}
