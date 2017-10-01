import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for creating an array that takes in unassigned arguments.
 */
export class RestParametersCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.RestParameters,
        [],
        [
            new SingleParameter("name", "A name for the rest parameter array.", true),
            new SingleParameter("type", "A type for the rest parameter array.", true)
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
        const left: string = this.language.properties.parameters.restKeywordLeft;
        let middle = "";
        const right: string = this.language.properties.parameters.restKeywordRight;

        if (this.language.properties.parameters.restDeclarationType) {
            if (!this.language.properties.parameters.restDeclarationAfter) {
                middle = parameters[2] + this.language.properties.parameters.restKeywordMiddle + parameters[1];
            }
            if (this.language.properties.parameters.restDeclarationAfter) {
                middle = parameters[1] + this.language.properties.parameters.restKeywordMiddle + parameters[2];
            }
        } else {
            middle = this.language.properties.parameters.restKeywordMiddle + parameters[1];
        }

        return LineResults.newSingleLine(left + middle + right, false);
    }
}
