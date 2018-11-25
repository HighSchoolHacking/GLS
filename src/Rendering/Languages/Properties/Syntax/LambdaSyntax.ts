import { LambdaTypeInlineSyntax } from "./LambdaTypeInlineSyntax";

/**
 * Metadata on a language's lambda syntax.
 */
export class LambdaSyntax {
    /**
     * How to start calling a lambda;
     */
    public callLeft: string;

    /**
     * How to end calling a lambda.
     */
    public callRight: string;

    /**
     * How to start a lambda.
     */
    public functionLeft: string;

    /**
     * A string between the lambda arguments and body.
     */
    public functionMiddle: string;

    /**
     * How to end a lambda.
     */
    public functionRight: string;

    /**
     * Whether parameter types must be included in the argument list.
     */
    public parameterTypeRequired: boolean;

    /**
     * Whether a return type must be included in the argument list.
     */
    public returnTypeRequired: boolean;

    public typeInline: LambdaTypeInlineSyntax = new LambdaTypeInlineSyntax();
}
