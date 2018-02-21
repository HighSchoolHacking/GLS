/**
 * A single line of code converted from raw GLS syntax.
 */
export class CommandResult {
    /**
     * How much indentation will change from the result.
     */
    public indentation: number;

    /**
     * Text contents of the result.
     *
     * @remarks If "\0", this isn't added.
     */
    public text: string;

    /**
     * Initializes a new instance of the CommandResult class.
     *
     * @param text   Text contents of the result.
     * @param indentation   How much indentation will change from the result.
     */
    public constructor(text: string, indentation: number) {
        this.text = text;
        this.indentation = indentation;
    }
}
