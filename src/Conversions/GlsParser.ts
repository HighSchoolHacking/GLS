import { Command } from "../Commands/Command";
import { CommandsBag } from "../Commands/CommandsBag";
import { LineResults } from "../Commands/LineResults";
import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { CaseStyleConverterBag } from "../Languages/Casing/CaseStyleConverterBag";
import { ConversionContext } from "./ConversionContext";

/**
 * Converter to transform raw GLS syntax into language code.
 */
export class GlsParser {
    /**
     * A bag for globally known commands.
     */
    private caseStyleConverterBag: CaseStyleConverterBag;

    /**
     * A bag for globally known commands.
     */
    private commandsBag: CommandsBag;

    /**
     * The driving context for converting commands.
     */
    private context: ConversionContext;

    /**
     * Initializes a new instance of the GlsParser class.
     * 
     * @param context   A driving context for converting commands.
     */
    constructor(context: ConversionContext) {
        this.caseStyleConverterBag = new CaseStyleConverterBag();
        this.context = context;
        this.commandsBag = new CommandsBag(context);
    }

    /**
     * Parses a line of raw GLS syntax into the equivalent language code.
     * 
     * @param line   A line of raw GLS syntax.
     * @returns The equivalent lines of code in the language.
     */
    public parseCommand(line: string): LineResults {
        let parameters: string[] = this.separateLineComponents(line.trim());

        for (let i: number = 1; i < parameters.length; i += 1) {
            if (parameters[i][0] === "{") {
                parameters[i] = this.recurseOnCommand(parameters[i]);
            }
        }

        return this.renderParsedCommand(parameters);
    }

    /**
     * Renders a parsed line into the equivalent language code. 
     * 
     * @param lineParsed   A parsed line from raw GLS syntax.
     * @returns The equivalent lines of code in the language.
     */
    public renderParsedCommand(lineParsed: string[]): LineResults {
        let command: Command = this.commandsBag.getCommand(lineParsed[0]);

        command.checkParameterValidity(lineParsed);

        return command.render(lineParsed);
    }

    /**
     * Converts a name to a casing style.
     * 
     * @param name   A name to convert.
     * @param caseStyle   A casing style.
     * @returns The name under the casing style.
     */
    public convertToCase(name: string, caseStyle: CaseStyle): string {
        const converter = this.caseStyleConverterBag.getConverter(caseStyle);

        return converter.convert(name);
    }

    /**
     * Parses a sub-command of GLS syntax from within a full line.
     * 
     * @param section   A section of raw GLS syntax.
     * @returns Text from the result of parsing this command.
     * @remarks Only the first result line is used.
     */
    private recurseOnCommand(section: string): string {
        let command: string = this.trimEndCharacters(section).trim();
        let lineResults: LineResults = this.parseCommand(command);
        let line: string = lineResults.commandResults[0].text;

        for (let i: number = 1; i < lineResults.commandResults.length; i += 1) {
            line += "\n" + lineResults.commandResults[i].text;
        }

        return line;
    }

    /**
     * Separates a line into its command name and parameters.
     * 
     * @param line   A raw line of GLS syntax.
     * @returns The line's command name, followed by any parameters.
     * @remarks This assumes the line is already whitespace-trimmed.
     */
    private separateLineComponents(line: string): string[] {
        let colonIndex: number = line.indexOf(":");
        if (colonIndex === -1) {
            return [line.trim()];
        }

        let output: string[] = [line.substring(0, colonIndex).trim()];

        for (let i: number = colonIndex + 2; i < line.length; i += 1) {
            let end: number;
            let nextStart: number;

            switch (line[i]) {
                case "{":
                    end = this.findSearchEnd(line, i, line[i], "}") + 1;
                    if (end === 0) {
                        throw new Error(`Could not find end for '{' starting at position ${i}.`);
                    }

                    nextStart = end;
                    break;

                case "(":
                    end = this.findSearchEnd(line, i, line[i], ")");
                    if (end === -1) {
                        throw new Error(`Could not find end for '(' starting at position ${i}.`);
                    }

                    nextStart = end + 1;
                    i += 1;
                    break;

                default:
                    end = this.findSearchEnd(line, i, " ", " ");
                    nextStart = end;
                    break;
            }

            if (end === -1) {
                end = nextStart = line.length;
            }

            if (i !== end) {
                output.push(line.substring(i, end));
            }

            i = nextStart;
        }

        return output;
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

    /**
     * Finds the corresponding end position for a starting separator.
     * 
     * @param text   The String to search within.
     * @param index   The starting location of the starting separator.
     * @param starter   The starting separator, such as "{".
     * @param ender   The ending separator, suchas "}".
     * @returns The position of the starter's corresponding ender.
     */
    private findSearchEnd(text: string, index: number, starter: string, ender: string): number {
        let numStarts: number = 1;

        for (let i: number = index + 1; i < text.length; i += 1) {
            let current: string = text[i];

            if (current === ender) {
                numStarts -= 1;
                if (numStarts === 0) {
                    return i;
                }
            } else if (current === starter) {
                numStarts += 1;
            }
        }

        return -1;
    }
}
