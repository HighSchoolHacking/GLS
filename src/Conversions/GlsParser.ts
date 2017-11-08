import { Command } from "../Commands/Command";
import { CommandsBag } from "../Commands/CommandsBag";
import { LineResults } from "../Commands/LineResults";
import { CaseStyleConverterBag } from "./Casing/CaseStyleConverterBag";
import { LineComponentSeparator } from "./LineComponentSeparator";
import { ParametersValidator } from "./ParametersValidator";

/**
 * Transforms raw GLS syntax into line results.
 */
export class GlsParser {
    /**
     * Holds case style converters, keyed by their case style.
     */
    private caseStyleConverterBag: CaseStyleConverterBag;

    /**
     * Hodls commands indexed by name.
     */
    private commandsBag: CommandsBag;

    /**
     * Separates lines into their command names and parameters.
     */
    private lineComponentSeparator: LineComponentSeparator;

    /**
     * Validates whether input parameters match command requirements.
     */
    private parametersValidator: ParametersValidator;

    /**
     * Initializes a new instance of the GlsParser class.
     *
     * @param caseStyleConverterBag   Holds case style converters, keyed by their case style.
     * @param commandsBag   Holds commands indexed by name.
     */
    public constructor(caseStyleConverterBag: CaseStyleConverterBag, commandsBag: CommandsBag) {
        this.caseStyleConverterBag = caseStyleConverterBag;
        this.commandsBag = commandsBag;
        this.parametersValidator = new ParametersValidator();
        this.lineComponentSeparator = new LineComponentSeparator();
    }

    /**
     * Parses a line of raw GLS syntax into line results.
     *
     * @param line   A line of raw GLS syntax.
     * @returns The equivalent line results.
     */
    public parseCommand(line: string): LineResults {
        const parameters: string[] = this.lineComponentSeparator.separate(line.trim());

        for (let i = 1; i < parameters.length; i += 1) {
            if (parameters[i][0] === "{") {
                parameters[i] = this.recurseOnCommand(parameters[i]);
            }
        }

        return this.renderParsedCommand(parameters);
    }

    /**
     * Renders a parsed line into line results.
     *
     * @param lineParsed   A parsed line from raw GLS syntax.
     * @returns The equivalent line results.
     */
    public renderParsedCommand(lineParsed: string[]): LineResults {
        const command: Command = this.commandsBag.getCommand(lineParsed[0]);

        this.parametersValidator.validate(lineParsed, command.getMetadata().parameters);

        return command.render(lineParsed);
    }

    /**
     * Parses a sub-command of GLS syntax from within a full line.
     *
     * @param section   A section of raw GLS syntax.
     * @returns Text from the result of parsing this command.
     * @remarks Only the first result line is used.
     */
    private recurseOnCommand(section: string): string {
        const command: string = this.trimEndCharacters(section).trim();
        const lineResults: LineResults = this.parseCommand(command);
        let line: string = lineResults.commandResults[0].text;

        for (let i = 1; i < lineResults.commandResults.length; i += 1) {
            line += "\n" + lineResults.commandResults[i].text;
        }

        return line;
    }

    /**
     * Trims the first and last characters from a String.
     *
     * @param text   A String.
     * @returns The same text, with end characters trimmed.
     */
    private trimEndCharacters(text: string): string {
        return text.substring(1, Math.max(text.length - 1, 1));
    }
}
