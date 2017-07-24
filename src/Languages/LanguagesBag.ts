import { CSharp } from "./CSharp";
import { Java } from "./Java";
import { JavaScript } from "./JavaScript";
import { Language } from "./Language";
import { Python } from "./Python";
import { Ruby } from "./Ruby";
import { TypeScript } from "./TypeScript";

/**
 * A quick lookup of standard languages.
 */
export class LanguagesBag {
    /**
     * An instance of the CSharp class.
     */
    public CSharp: CSharp = new CSharp();

    /**
     * An instance of the Java class.
     */
    public Java: Java = new Java();

    /**
     * An instance of the JavaScript class.
     */
    public JavaScript: JavaScript = new JavaScript();

    /**
     * An instance of the Python class.
     */
    public Python: Python = new Python();

    /**
     * An instance of the Ruby class.
     */
    public Ruby: Ruby = new Ruby();

    /**
     * An instance of the TypeScript class.
     */
    public TypeScript: TypeScript = new TypeScript();

    /**
     * Known languages, keyed by name.
     */
    private languagesByName: { [i: string]: Language } = {
        "CSharp": this.CSharp,
        "Java": this.Java,
        "JavaScript": this.JavaScript,
        "Python": this.Python,
        "Ruby": this.Ruby,
        "TypeScript": this.TypeScript
    };

    /**
     * @returns Names of languages in the listing.
     */
    public getLanguageNames(): string[] {
        return Object.keys(this.languagesByName);
    }

    /**
     * Adds a language to the listing.
     * 
     * @param name   The name of the language.
     * @param language   The language to add.
     */
    public addLanguage(name: string, language: Language): void {
        this.languagesByName[name] = language;
    }

    /**
     * @param name   A name of a language.
     * @returns The language under that name.
     */
    public getLanguage(name: string): Language {
        if (!this.languagesByName.hasOwnProperty(name)) {
            throw new Error(`Unknown language name: '${name}'.'`);
        }

        return this.languagesByName[name];
    }
}
