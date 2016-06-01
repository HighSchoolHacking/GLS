import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for an in-place dictionary initialization pair.
 */
export class DictionaryPairCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("key", "The pair key.", true),
        new SingleParameter("value", "The pair value", true),
        new SingleParameter("comma", "Whether a comma is needed", false)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return DictionaryPairCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let results: string = "";

        results += this.language.properties.dictionaries.initializePairLeft;
        results += this.renderKey(parameters[1]);
        results += this.language.properties.dictionaries.initializePairMiddle;
        results += parameters[2];
        results += this.language.properties.dictionaries.initializePairRight;

        if (parameters.length === 4) {
            results += this.language.properties.dictionaries.initializePairComma;
        }

        return LineResults.newSingleLine(results, false);
    }

    /**
     * Renders a quoted (string) or unquoted (variable) pair key.
     * 
     * @param keyRaw   The raw key used for it.
     * @returns The key, wrapped as necessary.
     * @todo Add wrapping brackets as needed (research for Python, Ruby).
     */
    private renderKey(keyRaw: string): string {
        let firstCharacter: string = keyRaw[0];
        let lastCharacter: string = keyRaw[keyRaw.length - 1];

        if (firstCharacter === `"` && lastCharacter === `"`) {
            return keyRaw;
        }

        if (firstCharacter === `"`) {
            throw new Error("Dictionary pair keys that start with quotes must end with quotes.");
        }

        if (lastCharacter === `"`) {
            throw new Error("Dictionary pair keys that end with quotes must start with quotes.");
        }

        throw new Error("Variables as dictionary keys are not supported at this time.");
    }
}
