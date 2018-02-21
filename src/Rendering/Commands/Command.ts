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

    /**
     * Adds a portion of raw syntax that may contain endlines.
     *
     * @param lines   In-progress line(s) of code in the rendering language.
     * @param extra   Raw syntax to add to the lines.
     * @param indentation   How much indentation the last line should be.
     */
    protected addLineEnder(lines: CommandResult[], extra: string, indentation: number): void {
        let currentLine: CommandResult = lines[lines.length - 1];
        let endlineIndex: number = extra.indexOf("\n");

        if (endlineIndex === -1) {
            currentLine.text += extra;
            currentLine.indentation = indentation;
            return;
        }

        let currentIndex = 0;

        while (endlineIndex !== -1) {
            const component: string = extra.substring(currentIndex, endlineIndex);

            currentLine.text += component;
            currentIndex = endlineIndex;

            currentLine = new CommandResult("", 0);
            lines.push(currentLine);

            currentIndex += 1;
            endlineIndex = extra.indexOf("\n", currentIndex);
        }

        if (currentIndex !== -1) {
            currentLine.text = extra.substring(currentIndex);
        }

        lines[lines.length - 1].indentation = indentation;
    }
}
