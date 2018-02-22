import { IMathOperationActor } from "./MathOperationActor";
import { MathOperation } from "./MathOperations";
import { AdditionOperationActor } from "./OperationActors/AdditionOperationActor";
import { SubtractionOperationActor } from "./OperationActors/SubtractionOperationActor";

/**
 * Converts simple math operations to the simplest possible strings.
 */
export class MathResolver {
    /**
     * Actors to resolve operations, keyed by operation type.
     */
    private static operationActors: { [i: number]: IMathOperationActor } = {
        [MathOperation.Addition]: new AdditionOperationActor(),
        [MathOperation.Subtraction]: new SubtractionOperationActor()
    };

    /**
     * Converts a simple math operation to its simplest possible string.
     *
     * @param left   Left parameter to operate on.
     * @param operation   Type of math operation.
     * @param right   Right parameter to operate on.
     * @returns Simplest possible string for the operation.
     */
    public resolve(left: string, operation: MathOperation, right: string): string {
        const actor = MathResolver.operationActors[operation];
        const leftInt: number = parseInt(left, 10);
        const rightInt: number = parseInt(right, 10);

        if (!isNaN(leftInt) && !isNaN(rightInt)) {
            return actor.resolve(leftInt, rightInt);
        }

        return left + actor.getDefaultAlias() + right;
    }
}
