import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Creates an array for unassigned arguments.
 */
export class RestParametersCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.RestParameters)
        .withDescription("Creates an array for unassigned arguments.")
        .withParameters([
            new SingleParameter("name", "A name for the rest parameter array.", true),
            new SingleParameter("type", "A type for the rest parameter array.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return RestParametersCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const left: string = this.language.syntax.parameters.restKeywordLeft;
        let middle = "";
        const right: string = this.language.syntax.parameters.restKeywordRight;

        if (this.language.syntax.parameters.restDeclarationType) {
            if (!this.language.syntax.parameters.restDeclarationAfter) {
                middle = parameters[2] + this.language.syntax.parameters.restKeywordMiddle + parameters[1];
            }
            if (this.language.syntax.parameters.restDeclarationAfter) {
                middle = parameters[1] + this.language.syntax.parameters.restKeywordMiddle + parameters[2];
            }
        } else {
            middle = this.language.syntax.parameters.restKeywordMiddle + parameters[1];
        }

        return LineResults.newSingleLine(left + middle + right, false);
    }
}
