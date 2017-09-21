import { ConversionContext } from "./Conversions/ConversionContext";
import { Language } from "./Languages/Language";
import { LanguagesBag } from "./Languages/LanguagesBag";

/**
 * Driving object to convert GLS syntax into real language code.
 */
export class Gls {
    /**
     * Context for the currently converted code.
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
     * Initializes a new instance of the Gls class.
     */
    public constructor() {
        this.languagesBag = new LanguagesBag();
    }

    /**
     * Converts raw GLS syntax into language code.
     *
     * @param input   GLS syntax to be converted.
     * @returns Language code from the input.
     */
    public convert(input: string[]): string[] {
        if (this.language === undefined) {
            throw new Error("You must specify a language before converting.");
        }

        return this.conversionContext.convert(input);
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
