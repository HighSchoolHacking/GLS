import { IMathOperationActor } from "../MathOperationActor";

/**
 * Runs math logic for a subtraction operation.
 */
export class SubtractionOperationActor implements IMathOperationActor {
    /**
     * @returns The equivalent string for the operator.
     */
    public getDefaultAlias(): string {
        return " - ";
    }

    /**
     * Resolves two numbers with the operator.
     *
     * @param left   Left number to operate on.
     * @param right   Right number to operate on.
     * @returns Result from operating on the numbers.
     */
    public resolve(left: number, right: number): string {
        return `${left - right}`;
    }
}
