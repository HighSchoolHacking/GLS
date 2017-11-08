import { CommandsBag } from "../Commands/CommandsBag";
import { CommandsBagFactory } from "../Commands/CommandsBagFactory";
import { LineResults } from "../Commands/LineResults";
import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Language } from "../Languages/Language";
import { CaseStyleConverterBag } from "./Casing/CaseStyleConverterBag";
import { NameSplitter } from "./Casing/NameSplitter";
import { GlsParser } from "./GlsParser";
import { ImportsPrinter } from "./Imports/ImportsPrinter";
import { LineResultsGenerator } from "./LineResultsGenerator";
import { OutputGenerator } from "./OutputGenerator";

/**
 * Driving context to use a GlsParser with a language to produce code.
 */
export class ConversionContext {
    /**
     * Holds case style converters, keyed by their case style.
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
     * Generates line results from raw GLS.
     */
    private lineResultsGenerator: LineResultsGenerator;

    /**
     * Splits name strings into words.
     */
    private nameSplitter: NameSplitter;

    /**
     * Generates language output from line results.
     */
    private outputGenerator: OutputGenerator;

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
        this.language = language;

        this.caseStyleConverterBag = new CaseStyleConverterBag();
        this.commandsBag = CommandsBagFactory.forContext(this);
        this.directories = [];
        this.nameSplitter = new NameSplitter();
        this.parser = new GlsParser(this.commandsBag);

        this.lineResultsGenerator = new LineResultsGenerator(
            new ImportsPrinter(
                language,
                this.caseStyleConverterBag.getConverter(language.properties.imports.case)),
            this.parser);

        this.outputGenerator = new OutputGenerator(language.properties.style.semicolon);
    }

    /**
     * Converts raw GLS syntax to the context language.
     *
     * @param lines   Lines of raw GLS syntax.
     * @returns Equivalent lines of code in the context language.
     */
    public convert(lines: string[]): string[] {
        const allLineResults: LineResults[] = this.lineResultsGenerator.generateLineResults(lines);
        const output = this.outputGenerator.generateOutputResults(allLineResults);

        return output;
    }

    /**
     * Converts an array-split name to a casing style.
     *
     * @param words   A name to convert.
     * @param casingStyle   A casing style.
     * @returns The name under the casing style.
     */
    public convertArrayToCase(words: string[], casingStyle: CaseStyle): string {
        const converter = this.caseStyleConverterBag.getConverter(casingStyle);

        return converter.convert(words);
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
