import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a group of standalone function declarations.
 */
export class StandaloneFunctionsDeclareEndCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StandaloneFunctionsDeclareEnd)
        .withDescription("Ends a group of standalone function declarations.")
        .withIndentation([-1]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StandaloneFunctionsDeclareEndCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (!this.language.properties.standaloneFunctions.withinStaticClass) {
            return new LineResults([], false);
        }

        return this.context.convertParsed([CommandNames.ClassEnd]);
    }
}
