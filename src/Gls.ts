import { ConversionContext } from "./Conversions/ConversionContext";
import { Language } from "./Languages/Language";
import { LanguagesBag } from "./Languages/LanguagesBag";

/**
 * Driving object to convert GLS syntax into real language code.
 */
export class Gls {
    /**
     * A lookup for known languages.
     */
    private languagesBag: LanguagesBag;

    /**
     * The current language for conversion.
     */
    private language: Language;

    /**
     * Context for the currently converted code.
     */
    private conversionContext: ConversionContext;

    /**
     * Initializes a new instance of the Gls class.
     */
    public constructor() {
        this.languagesBag = new LanguagesBag();
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

    /**
     * Converts raw GLS syntax into language code.
     * 
     * @param input   GLS syntax to be converted.
     * @returns Language code from the input.
     */
    public convert(input: string[]): string[] {
        return this.conversionContext.convert(input);
    }
}
