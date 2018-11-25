import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new generic typed array of an integer size.
 */
export class ArrayNewSizedGenericCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ArrayNewSizedGeneric)
        .withDescription("Initializes a new generic typed array of an integer size")
        .withParameters([
            new SingleParameter("type", "The type of object.", true),
            new SingleParameter("size", "Length of the array.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ArrayNewSizedGenericCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.syntax.arrays.newGenericCastRequired) {
            return this.renderCastingObject(parameters);
        }

        return this.renderNormally(parameters);
    }

    private renderCastingObject(parameters: string[]): LineResults {
        const newParameters = parameters.slice();
        newParameters[0] = CommandNames.ArrayNew;
        newParameters[1] = "Object";

        const arrayNewLine = this.context.convertParsed(newParameters);
        const typeLine = this.context.convertParsed([CommandNames.Type, parameters[1]]);

        arrayNewLine.commandResults[0].text = "(" + typeLine.commandResults[0].text + "[]) " + arrayNewLine.commandResults[0].text;

        return arrayNewLine.withImports(typeLine.addedImports);
    }

    private renderNormally(parameters: string[]): LineResults {
        const newParameters = parameters.slice();
        newParameters[0] = CommandNames.ArrayNewSized;

        return this.context.convertParsed(newParameters);
    }
}
