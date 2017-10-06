import { StringSubstringSupport } from "../Languages/Properties/StringSubstringProperties";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { MathOperation } from "./MathResolution/MathOperations";
import { MathResolver } from "./MathResolution/MathResolver";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Retrieves a section of a string until an index.
 */
export class StringSubstringIndexCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringSubstringIndex)
        .withDescription("Retrieves a section of a string until an index.")
        .withParameters([
            new SingleParameter("startIndex", "Starting index of the section.", true),
            new SingleParameter("startIndex", "Ending index of the section.", false)
        ]);

    /**
     * Converts simple math operations to the simplest possible strings.
     */
    private mathResolver: MathResolver = new MathResolver();

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringSubstringIndexCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let results = "";

        results += parameters[1];
        results += this.language.properties.strings.substrings.leftIndex;
        results += parameters[2];

        if (parameters.length === 4) {
            results += this.language.properties.strings.substrings.middle;
            results += this.renderSecondParameter(parameters);
        } else {
            results += this.language.properties.strings.substrings.defaultEnd;
        }

        results += this.language.properties.strings.substrings.right;

        return LineResults.newSingleLine(results, true);
    }

    /**
     * Renders the simplest possible form of the second parameter.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns The simplest possible form of the second parameter.
     */
    private renderSecondParameter(parameters: string[]): string {
        const support = this.language.properties.strings.substrings.support;
        if (support === StringSubstringSupport.Both || support === StringSubstringSupport.Index) {
            return parameters[3];
        }

        return this.mathResolver.resolve(parameters[3], MathOperation.Subtraction, parameters[2]);
    }
}
