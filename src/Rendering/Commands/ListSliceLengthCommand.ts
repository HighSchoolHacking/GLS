import { ListSliceSupport } from "../Languages/Properties/Syntax/ListSliceSyntax";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { MathOperation } from "./MathResolution/MathOperations";
import { MathResolver } from "./MathResolution/MathResolver";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Retrieves a range of a list of a length.
 */
export class ListSliceLengthCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ListSliceLength)
        .withDescription("Retrieves a range of a list of a length")
        .withParameters([
            new SingleParameter("listName", "Name of a list.", true),
            new SingleParameter("startIndex", "Starting index of the section.", true),
            new SingleParameter("startIndex", "Length of the section.", true),
        ]);

    /**
     * Converts simple math operations to the simplest possible strings.
     */
    private mathResolver: MathResolver = new MathResolver();

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListSliceLengthCommand.metadata;
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
        output += this.language.syntax.lists.slices.left;
        output += parameters[2];
        output += this.language.syntax.lists.slices.middle;
        output += this.renderThirdParameter(parameters);
        output += this.language.syntax.lists.slices.right;

        return LineResults.newSingleLine(output).withAddSemicolon(true);
    }

    /**
     * Renders the simplest possible form of the third parameter.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns The simplest possible form of the third parameter.
     */
    private renderThirdParameter(parameters: string[]): string {
        if (this.language.syntax.lists.slices.support === ListSliceSupport.Length) {
            return parameters[3];
        }

        return this.mathResolver.resolve(parameters[3], MathOperation.Addition, parameters[2]);
    }
}
