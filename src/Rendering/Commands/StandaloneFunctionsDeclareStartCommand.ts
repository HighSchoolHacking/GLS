import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { KeywordNames } from "./KeywordNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a group of standalone function declarations.
 */
export class StandaloneFunctionsDeclareStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StandaloneFunctionsDeclareStart)
        .withDescription("Starts a group of standalone function declarations.")
        .withIndentation([1])
        .withParameters([
            new KeywordParameter([KeywordNames.Export], "Keyword to export this class publicly.", false),
            new SingleParameter("groupName", "Name of the functions group.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StandaloneFunctionsDeclareStartCommand.metadata;
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

        const nextParameters: string[] = [CommandNames.ClassStart];
        let copyStart: number;

        if (parameters[1] === KeywordNames.Export) {
            copyStart = 2;
        } else {
            copyStart = 1;
        }

        for (let i = copyStart; i < parameters.length; i += 1) {
            nextParameters.push(parameters[i]);
        }

        const results = this.context.convertParsed(nextParameters);

        results.commandResults[0].text = KeywordNames.Static + " " + results.commandResults[0].text;

        if (parameters[1] === KeywordNames.Export) {
            results.commandResults[0].text = this.language.properties.classes.exports.exported + results.commandResults[0].text;
        }

        return results;
    }
}
