import { CommandsBag } from "../Commands/CommandsBag";
import { LineResults } from "../Commands/LineResults";
import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Language } from "../Languages/Language";
import { CaseStyleConverterBag } from "./Casing/CaseStyleConverterBag";
import { Conversion } from "./Conversion";
import { GlsParser } from "./GlsParser";

/**
 * Driving context to use a GlsParser with a language to produce code.
 */
export class ConversionContext {
    /**
     * Container for case style converters.
     */
    private caseStyleConverterBag: CaseStyleConverterBag;

    /**
     * Container for globally known commands.
     */
    private commandsBag: CommandsBag;

    /**
     * Directories leading to the current file.
     */
    private directories: string[];

    /**
     * The language this context is converting GLS code into.
     */
    private language: Language;

    /**
     * A converter for transforming raw GLS syntax into language code.
     */
    private parser: GlsParser;

    /**
     * Initializes a new instance of the ConversionContext class.
     * 
     * @param language   The language this context is converting GLS code into.
     */
    public constructor(language: Language) {
        this.caseStyleConverterBag = new CaseStyleConverterBag();
        this.directories = [];
        this.language = language;

        this.commandsBag = new CommandsBag(this);
        this.parser = new GlsParser(this.caseStyleConverterBag, this.commandsBag);
    }

    /**
     * @returns The language this context is converting GLS code into.
     */
    public getLanguage(): Language {
        return this.language;
    }

    /**
     * Converts raw GLS syntax to the context language.
     * 
     * @param lines   Lines of raw GLS syntax.
     * @returns Equivalent lines of code in the context language.
     */
    public convert(lines: string[]): string[] {
        let converter: Conversion = new Conversion(this.caseStyleConverterBag, this.language, this.parser);

        return converter.convert(lines);
    }

    /**
     * Converts a single-line command with a single argument.
     * 
     * @param command   The name of the command.
     * @param argumentRaw   A raw argument for the command.
     * @returns An equivalent line of code in the context language. 
     */
    public convertCommon(command: string, argumentRaw: string): string {
        let lineResults: LineResults = this.parser.renderParsedCommand([command, argumentRaw]);

        return lineResults.commandResults[0].text;
    }

    /**
     * Converts a command with pre-parsed arguments.
     * 
     * @param lineParsed   A parsed line from raw GLS syntax.
     * @returns The equivalent lines of code in the language.
     */
    public convertParsed(parameters: string[]): LineResults {
        return this.parser.renderParsedCommand(parameters);
    }

    /**
     * Converts a name to a casing style.
     * 
     * @param name   A name to convert.
     * @param casingStyle   A casing style.
     * @returns The name under the casing style.
     */
    public convertToCase(name: string[], casingStyle: CaseStyle): string {
        return this.parser.convertToCase(name, casingStyle);
    }

    /**
     * Sets the current file's directory path.
     * 
     * @param directories   Directories leading up to the current file.
     */
    public setDirectoryPath(directories: string[]): void {
        this.directories = directories;
    }

    /**
     * @returns Directories leading up to the current file.
     */
    public getDirectoryPath(): string[] {
        return this.directories;
    }
}
