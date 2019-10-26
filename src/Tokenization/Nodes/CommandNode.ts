import { IBudgieNode } from "./IBudgieNode";

/**
 * Budgie node for a command and any number of args.
 */
export class CommandNode implements IBudgieNode {
    /**
     * Characters that indicate a command needs to be wrapped in parenthesis.
     */
    private static readonly textWrapIndicators: string[] = ["{", "(", " "];

    /**
     * Budgie command name.
     */
    public readonly command: string;

    /**
     * Arguments for the command.
     */
    public readonly args: IBudgieNode[];

    /**
     * Initializes a new instance of the BudgieNode class.
     *
     * @param command   Budgie command name.
     * @param args   Arguments for the command.
     */
    public constructor(command: string, args: IBudgieNode[]) {
        this.command = command;
        this.args = args;
    }

    /**
     * Creates the Budgie syntax equivalent for this line.
     *
     * @returns The Budgie syntax equivalent for this line.
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
     * @param arg   Argument to a Budgie command.
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
     * Formats a string or recursive Budgie command argument.
     *
     * @param arg   String or recursive Budgie command argument.
     * @returns The formatted argument.
     */
    private static formatArg(arg: IBudgieNode): string {
        if (arg instanceof CommandNode) {
            return `{ ${arg} }`;
        }

        return CommandNode.wrapArg(arg.toString());
    }
}
