import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Adds a member to an enum.
 */
export class EnumMemberCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.EnumMember)
        .withDescription("Adds a member to an enum.")
        .withParameters([
            new SingleParameter("memberName", "A member of the container enum.", true),
            new SingleParameter("memberValue", "A value for the enum member.", true),
            new SingleParameter("comma", "Whether a comma is needed.", false),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return EnumMemberCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let result = "";

        result += parameters[1];
        result += this.language.syntax.enums.declareValueLeft;
        result += parameters[2];
        result += this.language.syntax.enums.declareValueRight;

        if (parameters.length === 4) {
            result += this.language.syntax.enums.declareCommaRight;
        } else {
            result += this.language.syntax.enums.declareLastRight;
        }

        return LineResults.newSingleLine(result, false);
    }
}
