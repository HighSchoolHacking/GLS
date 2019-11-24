import { Import } from "../../Imports/Import";

/**
 * How lists implement sorting by members.
 */
export enum ListSortMemberType {
    /**
     * Use a global function that takes in a shorthand lambda that takes in member instances.
     */
    GlobalLambda,

    /**
     * Uses a comparator function that takes in two instances.
     */
    KeyComparator,

    /**
     * Use a shorthand lambda to take a member of an instance to compare.
     */
    ShorthandLambda,
}

/**
 * Metadata on a how a language sorts a list in-place by keyed members.
 */
export class ListSortMembersSyntax {
    /**
     * How to start declaring a sorting lambda.
     */
    public lambdaLeft: string;

    /**
     * Characters between two members.
     */
    public lambdaMiddleLeft: string;

    /**
     * Characters to compare the two members.
     */
    public lambdaMiddleRight: string;

    /**
     * How to end declaring a sorting lambda.
     */
    public lambdaRight: string;

    /**
     * Any characters before the list name before a sorting lambda.
     */
    public preLambdaStart: string;

    /**
     * Required imports to be able to sort a list by keyed members.
     */
    public requiredImports: Import[];

    /**
     * How lists implement sorting by members.
     */
    public type: ListSortMemberType;
}
