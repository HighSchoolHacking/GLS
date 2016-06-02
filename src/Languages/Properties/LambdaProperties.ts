/**
 * Metadata on a language's lambdas.
 */
export class LambdaProperties {
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
}
