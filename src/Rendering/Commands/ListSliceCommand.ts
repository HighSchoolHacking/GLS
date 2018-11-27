import { GlsUtilities } from "../../GlsUtilities";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Retrieves a range of a list from a starting index.
 */
export class ListSliceCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ListSlice)
        .withDescription("Retrieves a range of a list from a starting index")
        .withParameters([
            new SingleParameter("listName", "Name of a list.", true),
            new SingleParameter("startIndex", "Starting index of the section.", false),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListSliceCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = this.language.syntax.lists.slices.before;
        output += parameters[1];
        output += this.language.syntax.lists.slices.untilEndLeft;

        if (parameters.length === 2) {
            output += this.language.syntax.lists.slices.untilEndDefaultStart;
        } else {
            output += parameters[2];
        }

        output += this.language.syntax.lists.slices.untilEndMiddle;
        output += this.getUntilEndRight(parameters);

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }

    private getUntilEndRight(parameters: string[]): string {
        const startIndex: string = this.getStartIndex(parameters);
        let text: string;

        if (startIndex === "0") {
            text = this.language.syntax.lists.slices.untilEndRightFromStart;
        } else {
            text = this.language.syntax.lists.slices.untilEndRightFromIndex;
        }

        text = GlsUtilities.stringReplaceAll(text, "{0}", parameters[1]);
        text = GlsUtilities.stringReplaceAll(text, "{1}", startIndex);
        return text;
    }

    private getStartIndex(parameters: string[]): string {
        if (parameters.length === 2) {
            return "0";
        }

        return parameters[2];
    }
}
