/**
 * Runs math logic for a math operation.
 */
export interface IMathOperationActor {
    /**
     * @returns The equivalent string for the operator.
     */
    getDefaultAlias(): string;

    /**
     * Resolves two numbers with the operator.
     *
     * @param left   Left number to operate on.
     * @param right   Right number to operate on.
     * @returns Result from operating on the numbers.
     */
    resolve(left: number, right: number): string;
}
