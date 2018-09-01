import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * An in-place dictionary initialization pair.
 */
export class DictionaryPairCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.DictionaryPair)
        .withDescription("An in-place dictionary initialization pair.")
        .withParameters([
            new SingleParameter("key", "The pair key.", true),
            new SingleParameter("value", "The pair value", true),
            new SingleParameter("comma", "Whether a comma is needed", false),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return DictionaryPairCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let results = "";

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
        const firstCharacter: string = keyRaw[0];
        const lastCharacter: string = keyRaw[keyRaw.length - 1];

        if (firstCharacter === '"' && lastCharacter === '"') {
            return keyRaw;
        }

        if (firstCharacter === '"') {
            throw new Error("Dictionary pair keys that start with quotes must end with quotes.");
        }

        if (lastCharacter === '"') {
            throw new Error("Dictionary pair keys that end with quotes must start with quotes.");
        }

        throw new Error("Variables as dictionary keys are not supported at this time.");
    }
}
