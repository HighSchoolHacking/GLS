import { ConversionContext } from "./ConversionContext";
import { OutputMerger } from "./Merging/OutputGenerator";
import { Language } from "./Rendering/Languages/Language";
import { LanguagesBag } from "./Rendering/Languages/LanguagesBag";
import { LineResults } from "./Rendering/LineResults";
import { GlsFile } from "./Tokenization/GlsFile";
import { SourceFileParser } from "./Tokenization/Parsers/SourceFileParser";

/**
 * Driving object to convert GLS syntax into real language code.
 */
export class Gls {
    /**
     * Backing command context for converting GLS nodes to text.
     */
    private conversionContext: ConversionContext;

    /**
     * The current language for conversion.
     */
    private language: Language;

    /**
     * A lookup for known languages.
     */
    private languagesBag: LanguagesBag;

    /**
     * Parses lines of raw source syntax into GLS files.
     */
    private sourceFileParser: SourceFileParser;

    /**
     * Generates language output by merging line results.
     */
    private outputMerger: OutputMerger;

    /**
     * Initializes a new instance of the Gls class.
     */
    public constructor(language: string) {
        this.languagesBag = new LanguagesBag();
        this.sourceFileParser = new SourceFileParser();

        this.setLanguage(language);
    }

    /**
     * Converts raw GLS syntax into language code.
     *
     * @param input   GLS syntax to be converted.
     * @returns Language code from the input.
     * @remarks See docs/internals for full documentation!
     */
    public convert(input: string[]): string[] {
        // 1. Tokenization
        const glsFile: GlsFile = this.sourceFileParser.parseLines(input);

        // 2. Rendering
        this.conversionContext.setDirectoryPath([]);
        const fileLineResults: LineResults[] = this.conversionContext.convert(glsFile);

        // 3. Merging
        return this.outputMerger.mergeFileLineResults(fileLineResults);
    }

    /**
     * @returns The current language for conversion.
     */
    public getLanguage(): Language {
        return this.language;
    }

    /**
     * Sets a new language to be used for conversion.
     *
     * @param name   The name of the language.
     * @returns this
     */
    public setLanguage(name: string): Gls {
        this.language = this.languagesBag.getLanguageByName(name);
        this.conversionContext = new ConversionContext(this.language);
        this.outputMerger = new OutputMerger(this.language.properties.style.semicolon);

        return this;
    }
}
