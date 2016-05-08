import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for declaring a variable.
 */
export class VariableCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("name", "The name of the variable.", true),
        new SingleParameter("type", "The type of the variable.", true),
        new SingleParameter("value", "The starting value of the variable.", false)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return VariableCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (name, type[, value]).
     */
    public render(parameters: string[]): LineResults {
        if (parameters.length === 3 && !this.language.properties.variables.declarationRequired) {
            return LineResults.newSingleLine("\0", false);
        }

        let starter: string = this.language.properties.variables.declaration;
        let newParameters: string[] = parameters.slice();
        newParameters[0] = "variable inline";

        let ender: string = this.context.convertParsed(newParameters).commandResults[0].text;

        return LineResults.newSingleLine(starter + ender, true);
    }
}
