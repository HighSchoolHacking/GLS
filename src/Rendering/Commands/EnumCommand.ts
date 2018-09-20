import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Retrieves an enum value by name.
 */
export class EnumCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.Enum)
        .withDescription("Retrieves an enum value by name")
        .withParameters([
            new SingleParameter("enumName", "A container enum.", true),
            new SingleParameter("memberName", "A member of the container enum.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return EnumCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result = "";

        result += this.language.syntax.enums.valueLeft;
        result += parameters[1];
        result += this.language.syntax.enums.valueMiddle;
        result += parameters[2];
        result += this.language.syntax.enums.valueRight;

        return LineResults.newSingleLine(result, true);
    }
}
