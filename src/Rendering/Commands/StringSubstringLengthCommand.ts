import { StringSubstringSupport } from "../Languages/Properties/Syntax/StringSubstringSyntax";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { MathOperation } from "./MathResolution/MathOperations";
import { MathResolver } from "./MathResolution/MathResolver";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Retrieves a section of a string of a length.
 */
export class StringSubstringLengthCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StringSubstringLength)
        .withDescription("Retrieves a section of a string of a length")
        .withParameters([
            new SingleParameter("startIndex", "Starting index of the section.", true),
            new SingleParameter("startIndex", "Length of the section.", false),
        ]);

    /**
     * Converts simple math operations to the simplest possible strings.
     */
    private mathResolver: MathResolver = new MathResolver();

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StringSubstringLengthCommand.metadata;
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
        results += this.language.syntax.strings.substrings.leftLength;
        results += parameters[2];

        if (parameters.length === 4) {
            results += this.language.syntax.strings.substrings.middle;
            results += this.renderSecondParameter(parameters);
        } else {
            results += this.language.syntax.strings.substrings.defaultEnd;
        }

        results += this.language.syntax.strings.substrings.right;

        return LineResults.newSingleLine(results, true);
    }

    /**
     * Renders the simplest possible form of the second parameter.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns The simplest possible form of the second parameter.
     */
    private renderSecondParameter(parameters: string[]): string {
        const support = this.language.syntax.strings.substrings.support;
        if (support === StringSubstringSupport.Both || support === StringSubstringSupport.Length) {
            return parameters[3];
        }

        return this.mathResolver.resolve(parameters[3], MathOperation.Addition, parameters[2]);
    }
}
