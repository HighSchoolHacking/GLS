import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * A command for ending an enum declaration.
 */
export class EnumEndCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.EnumEnd,
        [-1],
        []);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return EnumEndCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const ender: string = this.renderEnumEnd();

        if (ender === "\0") {
            return LineResults.newBlockLine("\0", -1);
        }

        return LineResults.newBlockLine(ender, -1);
    }

    /**
     * Renders the end block for enums.
     *
     * @returns The end block for enums.
     */
    protected renderEnumEnd(): string {
        if (this.language.properties.enums.isObject) {
            return this.language.properties.conditionals.end + ";";
        }

        return this.language.properties.conditionals.end;
    }
}
