import { Language } from "../../Languages/Language";
import { LineResults } from "../../LineResults";

/**
 * Renders a type of instantiation.
 */
export abstract class NewRenderer {
    /**
     * Language to render to.
     */
    protected language: Language;

    /**
     * Initializes a new instance of the NewCallRenderer class.
     *
     * @param language   Language to render to.
     */
    public constructor(language: Language) {
        this.language = language;
    }

    /**
     * Renders the native call for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    public abstract render(parameters: string[]): LineResults;
}
