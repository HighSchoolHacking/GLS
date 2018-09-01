import { IGlsNode } from "./IGlsNode";

/**
 * GLS node for a command and any number of args.
 */
export class CommandNode implements IGlsNode {
    /**
     * Characters that indicate a command needs to be wrapped in parenthesis.
     */
    private static readonly textWrapIndicators: string[] = ["{", "(", " "];

    /**
     * GLS command name.
     */
    public readonly command: string;

    /**
     * Arguments for the command.
     */
    public readonly args: IGlsNode[];

    /**
     * Initializes a new instance of the GlsNode class.
     *
     * @param command   GLS command name.
     * @param args   Arguments for the command.
     */
    public constructor(command: string, args: IGlsNode[]) {
        this.command = command;
        this.args = args;
    }

    /**
     * Creates the GLS syntax equivalent for this line.
     *
     * @returns The GLS syntax equivalent for this line.
     */
    public toString(): string {
        if (this.args.length === 0) {
            return this.command;
        }

        let output = this.command + " :";

        for (const arg of this.args) {
            output += " " + CommandNode.formatArg(arg);
        }

        return output;
    }

    /**
     * Wraps a command argument if it has any spaces.
     *
     * @param arg   Argument to a GLS command.
     * @returns The argument, wrapped if necessary.
     */
    private static wrapArg(arg: string): string {
        for (const indicator of CommandNode.textWrapIndicators) {
            if (arg.indexOf(indicator) !== -1) {
                return `(${arg})`;
            }
        }

        return arg;
    }

    /**
     * Formats a string or recursive GLS command argument.
     *
     * @param arg   String or recursive GLS command argument.
     * @returns The formatted argument.
     */
    private static formatArg(arg: IGlsNode): string {
        if (arg instanceof CommandNode) {
            return `{ ${arg} }`;
        }

        return CommandNode.wrapArg(arg.toString());
    }
}
