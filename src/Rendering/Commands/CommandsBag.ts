import { Command } from "./Command";

/**
 * Holds commands indexed by name.
 */
export class CommandsBag {
    /**
     * Globally known commands, keyed by their Budgie alias.
     */
    private commands: { [i: string]: Command };

    /**
     * Initializes a new instance of the CommandsBag class.
     *
     * @param context   The driving context for conversions.
     */
    public constructor(commands: Command[]) {
        this.commands = {};

        for (const command of commands) {
            this.addCommand(command);
        }
    }

    /**
     * Adds a command to the bag.
     *
     * @param command   Command to add.
     */
    public addCommand(command: Command): void {
        const metadata = command.getMetadata();
        const name = metadata.name;

        if ({}.hasOwnProperty.call(this.commands, name)) {
            throw new Error(`Cannot add duplicate command: '${name}'.`);
        }

        this.commands[name] = command;
    }

    /**
     * Retrieves the command under the given alias.
     *
     * @param name   The unique name of a command.
     * @returns The command under the given alias.
     */
    public getCommand(name: string): Command {
        if (!{}.hasOwnProperty.call(this.commands, name)) {
            throw new Error(`Unknown command requested: '${name}'.`);
        }

        return this.commands[name];
    }

    /**
     * @returns Commands, keyed by their Budgie aliases.
     */
    public getCommands(): { [i: string]: Command } {
        return this.commands;
    }
}
