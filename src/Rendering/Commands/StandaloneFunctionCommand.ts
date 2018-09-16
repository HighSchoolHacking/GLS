import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { KeywordNames } from "./KeywordNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Calls a standalone function.
 */
export class StandaloneFunctionCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StandaloneFunction)
        .withDescription("Calls a standalone function")
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the function.", true),
            new SingleParameter("className", "The name of the group the function is on.", true),
            new SingleParameter("functionName", "The name of the function.", true),
            new RepeatingParameters("Function parameters", [
                new SingleParameter("parameterName", "A named parameter for the function.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StandaloneFunctionCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.properties.standaloneFunctions.withinStaticClass) {
            return this.renderWithinStaticClass(parameters);
        }

        return this.renderFloating(parameters);
    }

    /**
     * Renders the command for a language without wrapping static classes.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderFloating(parameters: string[]): LineResults {
        let output = "";
        output += this.context.convertStringToCase(parameters[3], this.language.properties.functions.case);
        output += "(";

        if (parameters.length > 4) {
            output += parameters[4];

            for (let i = 5; i < parameters.length; i += 1) {
                output += ", ";
                output += parameters[i];
            }
        }

        output += ")";

        return LineResults.newSingleLine(output, true);
    }

    /**
     * Renders the command for a language with wrapping static classes.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderWithinStaticClass(parameters: string[]): LineResults {
        parameters[0] = CommandNames.StaticFunction;

        return this.context.convertParsed(parameters);
    }
}
