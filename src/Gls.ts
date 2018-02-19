import { ConversionContext } from "./Conversions/ConversionContext";
import { Language } from "./Languages/Language";
import { LanguagesBag } from "./Languages/LanguagesBag";
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
     */
    public convert(input: string[]): string[] {
        this.conversionContext.setDirectoryPath([]);

        return this.conversionContext.convert(this.sourceFileParser.parseLines(input));
    }

    /**
     * @returns The current language for conversion.
     */
    public getLanguage(): Language {
        return this.language;
    }

    /**
     * @returns A lookup for known languages.
     */
    public getLanguagesBag(): LanguagesBag {
        return this.languagesBag;
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

        return this;
    }
}
