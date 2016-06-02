import { ConversionContext } from "../Conversions/ConversionContext";
import { Language } from "../Languages/Language";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { Restrictions } from "./Parameters/Restrictions";

/**
 * Abstract base class for commands that may be rendered into language code.
 */
export abstract class Command {
    /**
     * Default information on parameters a command takes in (none).
     */
    private static defaultParameters: Parameter[] = [];

    /**
     * The driving context for converting the command.
     */
    protected context: ConversionContext;

    /**
     * A language to convert raw code into.
     */
    protected language: Language;

    /**
     * Whether this command'slines should end with a semicolon.
     */
    protected addsSemicolon: boolean;

    /**
     * Validity checker for provided parameters.
     */
    private parameterRestrictions: Restrictions;

    /**
     * Initializes a new instance of the Command class.
     * 
     * @param context   The driving context for converting the command.
     */
    constructor(context: ConversionContext) {
        this.context = context;
        this.language = context.getLanguage();
        this.parameterRestrictions = new Restrictions(this.getParameters());
    }

    /**
     * @returns Whether this command's lines should end with a semicolon.
     */
    public getAddsSemicolon(): boolean {
        return this.addsSemicolon;
    }

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return Command.defaultParameters;
    }

    /**
     * Checks if parameters are valid, throwing an error if not.
     * 
     * @param parameters   The command's name, followed by any parameters.
     */
    public checkParameterValidity(parameters: string[]): void {
        this.parameterRestrictions.checkValidity(parameters);
    }

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

        let currentIndex: number = 0;

        while (endlineIndex !== -1) {
            let component: string = extra.substring(currentIndex, endlineIndex);

            currentLine.text += component;
            currentIndex = endlineIndex;

            currentLine = new CommandResult("", 0);
            lines.push(currentLine);

            endlineIndex = extra.indexOf("\n", currentIndex + 1);
        }

        if (currentIndex !== -1) {
            currentLine.text = extra.substring(currentIndex + 1);
        }

        lines[lines.length - 1].indentation = indentation;
    }
}
