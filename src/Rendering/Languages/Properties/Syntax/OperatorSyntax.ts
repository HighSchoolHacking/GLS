import { OperatorNames } from "../../../Names/OperatorNames";

/**
 * Metadata on a language's operator syntax.
 */
export class OperatorSyntax {
    /**
     * Aliases of operators, from raw Budgie syntax to this language's equivalents.
     */
    public aliases: { [i: string]: string };

    /**
     * The symbols used for "&&".
     */
    public and: string;

    /**
     * The symbols used for "-=".
     */
    public decreaseBy: string;

    /**
     * The symbols used for "/".
     */
    public divide: string;

    /**
     * The symbols used for "/=".
     */
    public divideBy: string;

    /**
     * The symbols used for "=".
     */
    public equals: string;

    /**
     * The symbols used for "==".
     */
    public equalTo: string;

    /**
     * The symbols used for ">".
     */
    public greaterThan: string;

    /**
     * The symbols used for ">=".
     */
    public greaterThanOrEqualTo: string;

    /**
     * The symbols used for "+=".
     */
    public increaseBy: string;

    /**
     * The symbols used for "<".
     */
    public lessThan: string;

    /**
     * The symbols used for "<=".
     */
    public lessThanOrEqualTo: string;

    /**
     * The symbols used for "-".
     */
    public minus: string;

    /**
     * The symbols used for "%".
     */
    public mod: string;

    /**
     * The symbols used for "*=".
     */
    public multiplyBy: string;

    /**
     * The symbols used for "!".
     */
    public not: string;

    /**
     * The symbols used for "!=".
     */
    public notEqualTo: string;

    /**
     * The symbols used for "||".
     */
    public or: string;

    /**
     * The symbols used for "+".
     */
    public plus: string;

    /**
     * The symbols used for "*".
     */
    public times: string;

    /**
     * Initializes aliases based on the equivalent member properties.
     */
    public generateAliases(): void {
        this.aliases = {
            [OperatorNames.And]: this.and,
            [OperatorNames.DecreaseBy]: this.decreaseBy,
            [OperatorNames.Divide]: this.divide,
            [OperatorNames.DivideBy]: this.divideBy,
            [OperatorNames.EqualTo]: this.equalTo,
            [OperatorNames.Equals]: this.equals,
            [OperatorNames.GreaterThan]: this.greaterThan,
            [OperatorNames.GreaterThanOrEqualTo]: this.greaterThanOrEqualTo,
            [OperatorNames.IncreaseBy]: this.increaseBy,
            [OperatorNames.LessThan]: this.lessThan,
            [OperatorNames.LessThanOrEqualTo]: this.lessThanOrEqualTo,
            [OperatorNames.Minus]: this.minus,
            [OperatorNames.Mod]: this.mod,
            [OperatorNames.MultiplyBy]: this.multiplyBy,
            [OperatorNames.Not]: this.not,
            [OperatorNames.NotEqualTo]: this.notEqualTo,
            [OperatorNames.Or]: this.or,
            [OperatorNames.Plus]: this.plus,
            [OperatorNames.Times]: this.times,
        };
    }
}
