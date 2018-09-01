import { GlsFile } from "../Tokenization/GlsFile";
import { CommandNode } from "../Tokenization/Nodes/CommandNode";
import { TextNode } from "../Tokenization/Nodes/TextNode";
import { CaseStyleConverterBag } from "./Casing/CaseStyleConverterBag";
import { NameSplitter } from "./Casing/NameSplitter";
import { CommandsBagFactory } from "./Commands/CommandsBagFactory";
import { GlsNodeRenderer } from "./GlsNodeRenderer";
import { ImportsPrinter } from "./Imports/ImportsPrinter";
import { CaseStyle } from "./Languages/Casing/CaseStyle";
import { Language } from "./Languages/Language";
import { LineResults } from "./LineResults";
import { LineResultsGenerator } from "./LineResultsGenerator";

/**
 * Backing command context for converting GLS nodes to text.
 */
export class RenderContext {
    /**
     * Holds case style converters, keyed by their case style.
     */
    private caseStyleConverterBag: CaseStyleConverterBag;

    /**
     * Directories leading to the current file.
     */
    private directories: string[];

    /**
     * The language this context is converting GLS code into.
     */
    private language: Language;

    /**
     * Generates line results from GLS nodes.
     */
    private lineResultsGenerator: LineResultsGenerator;

    /**
     * Splits name strings into words.
     */
    private nameSplitter: NameSplitter;

    /**
     * Renders GLS nodes into line results.
     */
    private nodeRenderer: GlsNodeRenderer;

    /**
     * Initializes a new instance of the RenderContext class.
     *
     * @param language   The language this context is converting GLS code into.
     */
    public constructor(language: Language) {
        this.language = language;

        this.caseStyleConverterBag = new CaseStyleConverterBag();
        this.directories = [];
        this.nameSplitter = new NameSplitter();
        this.nodeRenderer = new GlsNodeRenderer(CommandsBagFactory.forContext(this));

        this.lineResultsGenerator = new LineResultsGenerator(
            new ImportsPrinter(language, this.caseStyleConverterBag.getConverter(language.properties.imports.case)),
            this.nodeRenderer,
        );
    }

    /**
     * Converts a GLS file to its line results.
     *
     * @param glsFile   GLS file to convert.
     * @returns Equivalent lines of code in the context language.
     */
    public convert(glsFile: GlsFile): LineResults[] {
        return this.lineResultsGenerator.generateLineResults(glsFile.getNodes());
    }

    /**
     * Converts a single-line command with a single argument.
     *
     * @param command   The name of the command.
     * @param argumentRaw   A raw argument for the command.
     * @returns An equivalent line of code in the context language.
     */
    public convertCommon(command: string, argumentRaw: string): string {
        const commandNode = new CommandNode(command, [new TextNode(argumentRaw)]);
        const lineResults: LineResults = this.nodeRenderer.renderNode(commandNode);

        return lineResults.commandResults[0].text;
    }

    /**
     * Converts a command with pre-parsed arguments.
     *
     * @param lineParsed   A parsed line from raw GLS syntax.
     * @returns The equivalent lines of code in the language.
     */
    public convertParsed(parametersRaw: string[]): LineResults {
        const args: TextNode[] = [];
        for (let i = 1; i < parametersRaw.length; i += 1) {
            args.push(new TextNode(parametersRaw[i]));
        }

        const commandNode = new CommandNode(parametersRaw[0], args);

        return this.nodeRenderer.renderNode(commandNode);
    }

    /**
     * Converts an array-split name to a casing style.
     *
     * @param words   A name to convert.
     * @param casingStyle   A casing style.
     * @returns The name under the casing style.
     */
    public convertArrayToCase(words: string[], casingStyle: CaseStyle): string {
        return this.caseStyleConverterBag.getConverter(casingStyle).convert(words);
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
