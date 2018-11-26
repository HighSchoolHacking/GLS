import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Adds a member to an enum.
 */
export class EnumMemberCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.EnumMember)
        .withDescription("Adds a member to an enum")
        .withParameters([
            new SingleParameter("memberName", "A member of the container enum.", true),
            new SingleParameter("memberValue", "A value for the enum member.", true),
            new KeywordParameter([KeywordNames.CommaSymbol], "Whether a comma is needed.", false),
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
        let output = "";

        output += parameters[1];

        if (this.language.syntax.enums.declareValues) {
            output += this.language.syntax.enums.declareValueLeft;
            output += parameters[2];
            output += this.language.syntax.enums.declareValueRight;
        }

        if (parameters.length === 4) {
            output += this.language.syntax.enums.declareCommaRight;
        } else {
            output += this.language.syntax.enums.declareLastRight;
        }

        return LineResults.newSingleLine(output);
    }
}
