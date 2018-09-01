/**
 * Metadata on a language's operators.
 */
export class OperatorProperties {
    /**
     * Aliases of operators, from raw GLS syntax to this language's equivalents.
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
            and: this.and,
            "decrease by": this.decreaseBy,
            divide: this.divide,
            "divide by": this.divideBy,
            "equal to": this.equalTo,
            equals: this.equals,
            "greater than": this.greaterThan,
            "greater than or equal to": this.greaterThanOrEqualTo,
            "increase by": this.increaseBy,
            "less than": this.lessThan,
            "less than or equal to": this.lessThanOrEqualTo,
            minus: this.minus,
            mod: this.mod,
            "multiply by": this.multiplyBy,
            not: this.not,
            "not equal to": this.notEqualTo,
            or: this.or,
            plus: this.plus,
            times: this.times,
        };
    }
}
