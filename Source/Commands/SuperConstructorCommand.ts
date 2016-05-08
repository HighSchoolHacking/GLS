import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for calling a parent class constructor.
 */
export class SuperConstructorCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new RepeatingParameters(
            "Function arguments.",
            [
                new SingleParameter("argument", "An argument for the super constructor.", true),
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return SuperConstructorCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output: string = "";

        output += this.language.properties.classes.superConstructor;
        output += "(";

        if (parameters.length > 1) {
            output += parameters[1];

            for (let i: number = 2; i < parameters.length; i += 1) {
                output += ", " + parameters[i];
            }
        }

        output += ")";

        return LineResults.newSingleLine(output, true);
    }
}
