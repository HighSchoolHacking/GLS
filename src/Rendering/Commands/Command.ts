import { Language } from "../Languages/Language";
import { LineResults } from "../LineResults";
import { RenderContext } from "../RenderContext";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Base class for commands that may be rendered into language code.
 */
export abstract class Command {
    /**
     * The driving context for converting the command.
     */
    protected context: RenderContext;

    /**
     * A language to convert raw code into.
     */
    protected language: Language;

    /**
     * Initializes a new instance of the Command class.
     *
     * @param context   The driving context for converting the command.
     */
    public constructor(context: RenderContext) {
        this.context = context;
        this.language = context.getLanguage();
    }

    /**
     * @returns Metadata on the command.
     */
    public abstract getMetadata(): CommandMetadata;

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public abstract render(parameters: string[]): LineResults;
}
