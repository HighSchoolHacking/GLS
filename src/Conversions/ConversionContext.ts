import { CommandsBag } from "../Commands/CommandsBag";
import { LineResults } from "../Commands/LineResults";
import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Language } from "../Languages/Language";
import { CaseStyleConverterBag } from "./Casing/CaseStyleConverterBag";
import { NameSplitter } from "./Casing/NameSplitter";
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
     * Splits name strings into words.
     */
    private nameSplitter: NameSplitter;

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
        this.nameSplitter = new NameSplitter();
        this.directories = [];
        this.language = language;

        this.commandsBag = new CommandsBag(this);
        this.parser = new GlsParser(this.caseStyleConverterBag, this.commandsBag);
    }

    /**
     * Converts raw GLS syntax to the context language.
     *
     * @param lines   Lines of raw GLS syntax.
     * @returns Equivalent lines of code in the context language.
     */
    public convert(lines: string[]): string[] {
        const converter: Conversion = new Conversion(this.caseStyleConverterBag, this.language, this.parser);

        return converter.convert(lines);
    }

    /**
     * Converts an array-split name to a casing style.
     *
     * @param words   A name to convert.
     * @param casingStyle   A casing style.
     * @returns The name under the casing style.
     */
    public convertArrayToCase(words: string[], casingStyle: CaseStyle): string {
        return this.parser.convertToCase(words, casingStyle);
    }

    /**
     * Converts a single-line command with a single argument.
     *
     * @param command   The name of the command.
     * @param argumentRaw   A raw argument for the command.
     * @returns An equivalent line of code in the context language.
     */
    public convertCommon(command: string, argumentRaw: string): string {
        const lineResults: LineResults = this.parser.renderParsedCommand([command, argumentRaw]);

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
     * Converts a string name to a casing style.
     *
     * @param name   A name to convert.
     * @param casingStyle   A casing style.
     * @returns The name under the casing style.
     */
    public convertStringToCase(name: string, casingStyle: CaseStyle): string {
        return this.convertArrayToCase(this.nameSplitter.split(name), casingStyle);
    }

    /**
     * @returns Directories leading up to the current file.
     */
    public getDirectoryPath(): string[] {
        return this.directories;
    }

    /**
     * @returns The language this context is converting GLS code into.
     */
    public getLanguage(): Language {
        return this.language;
    }

    /**
     * Sets the current file's directory path.
     *
     * @param directories   Directories leading up to the current file.
     */
    public setDirectoryPath(directories: string[]): void {
        this.directories = directories;
    }
}
