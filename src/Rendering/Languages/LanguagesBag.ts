import { CSharp } from "./CSharp";
import { Java } from "./Java";
import { JavaScript } from "./JavaScript";
import { Language } from "./Language";
import { Python } from "./Python";
import { Ruby } from "./Ruby";
import { TypeScript } from "./TypeScript";

/**
 * Lookup of standard languages.
 */
export class LanguagesBag {
    /**
     * Built-in languages.
     */
    private static languages: Language[] = [new CSharp(), new Java(), new JavaScript(), new Python(), new Ruby(), new TypeScript()];

    /**
     * Known languages, keyed by extension.
     */
    private languagesByExtension: { [i: string]: Language } = {};

    /**
     * Known languages, keyed by name.
     */
    private languagesByName: { [i: string]: Language } = {};

    /**
     * Initializes a new instance of the LanguagesBag class.
     */
    public constructor() {
        for (const language of LanguagesBag.languages) {
            this.addLanguage(language);
        }
    }

    /**
     * Adds a language to the listing.
     *
     * @param language   The language to add.
     */
    public addLanguage(language: Language): void {
        this.languagesByExtension[language.general.extension] = language;
        this.languagesByName[language.general.name] = language;
    }

    /**
     * Retrieves a language by its extension.
     *
     * @param extension   Extension of a language, including preceding period.
     * @returns The language under the extension.
     */
    public getLanguageByExtension(extension: string): Language {
        if (!this.languagesByExtension.hasOwnProperty(extension)) {
            throw new Error(`Unknown language extension: '${extension}'.'`);
        }

        return this.languagesByExtension[extension];
    }

    /**
     * Retrieves a language by its name.
     *
     * @param name   Name of a language.
     * @returns The language under the name.
     */
    public getLanguageByName(name: string): Language {
        if (!this.languagesByName.hasOwnProperty(name)) {
            throw new Error(`Unknown language name: '${name}'.'`);
        }

        return this.languagesByName[name];
    }

    /**
     * @returns Names of languages in the listing.
     */
    public getLanguageNames(): string[] {
        return Object.keys(this.languagesByName);
    }
}
