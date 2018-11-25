import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new generic type array.
 */
export class ArrayNewGenericCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ArrayNewGeneric)
        .withDescription("Initializes a new generic type array")
        .withParameters([
            new SingleParameter("type", "The type of object.", true),
            new RepeatingParameters("Items initially in the array", [
                new SingleParameter("item", "An item initially in the array.", false),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ArrayNewGenericCommand.metadata;
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
        newParameters[0] = CommandNames.ArrayNew;

        return this.context.convertParsed(newParameters);
    }
}
