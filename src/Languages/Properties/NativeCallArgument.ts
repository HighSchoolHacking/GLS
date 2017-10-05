/**
 * Defaults contents an indexed call to a native command.
 */
export class NativeCallArgument {
    /**
     * Index to default this argument in.
     */
    public index: number;

    /**
     * Contents of the argument.
     */
    public text: string;

    /**
     * Initializes a new instance of the NativeArgument class.
     *
     * @param text   Contents of the argument.
     * @param index   Index to default this argument in.
     */
    public constructor(text: string, index: number) {
        this.index = index;
        this.text = text;
    }
}
