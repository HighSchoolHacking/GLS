import { GlsFile } from "../Tokenization/GlsFile";
import { CommandNode } from "../Tokenization/Nodes/CommandNode";
import { TextNode } from "../Tokenization/Nodes/TextNode";
import { CaseStyleConverterBag } from "./Casing/CaseStyleConverterBag";
import { NameSplitter } from "./Casing/NameSplitter";
import { CommandsBagFactory } from "./Commands/CommandsBagFactory";
import { FileMetadata } from "./FileMetadata";
import { GlsNodeRenderer } from "./GlsNodeRenderer";
import { ImportsPrinter } from "./Imports/ImportsPrinter";
import { ImportsStore } from "./Imports/ImportsStore";
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
     * Name and path for the rendering file.
     */
    private fileMetadata: FileMetadata;

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
        this.fileMetadata = FileMetadata.defaultFileMetadata;
        this.nameSplitter = new NameSplitter();
        this.nodeRenderer = new GlsNodeRenderer(CommandsBagFactory.forContext(this));

        this.lineResultsGenerator = new LineResultsGenerator(
            this.language.syntax.files,
            new ImportsPrinter(
                this.language,
                this.caseStyleConverterBag.getConverter(this.language.syntax.imports.case),
                this.caseStyleConverterBag.getConverter(this.language.general.fileCase),
                this.nameSplitter,
            ),
        );
    }

    /**
     * Converts a GLS file to its line results.
     *
     * @param glsFile   GLS file to convert.
     * @returns Equivalent lines of code in the context language.
     */
    public convert(glsFile: GlsFile): LineResults[] {
        const allLineResults: LineResults[] = [];
        const importsStore = new ImportsStore();

        // Add line results in order, recording any added imports they need.
        for (const node of glsFile.getNodes()) {
            const lineResults: LineResults = this.nodeRenderer.renderNode(node);

            allLineResults.push(lineResults);
            importsStore.addImports(lineResults.addedImports);
        }

        return this.lineResultsGenerator.generateLineResults(allLineResults, importsStore, this.fileMetadata.getPackagePath().length !== 0);
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
     * @returns Name and path for the rendering file.
     */
    public getFileMetadata(): FileMetadata {
        return this.fileMetadata;
    }

    /**
     * @returns The language this context is converting GLS code into.
     */
    public getLanguage(): Language {
        return this.language;
    }

    /**
     * Sets the current file name and path.
     *
     * @param fileDirectory   Name and path for the rendering file.
     */
    public setFileMetadata(fileMetadata: FileMetadata): void {
        this.fileMetadata = fileMetadata;
    }
}
