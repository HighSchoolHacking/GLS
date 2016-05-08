import { Language } from "../Languages/Language";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";

/**
 * A command for the start of declaring a variable.
 */
export class VariableStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("name", "The name of the variable.", true),
        new SingleParameter("type", "The type of the variable.", true),
        new SingleParameter("value", "The start of the value of the variable.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return VariableStartCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (name, type, value).
     */
    public render(parameters: string[]): LineResults {
        // Languages like C# will give the last value in parameters including a "\n"
        let newParameters: string[] = ["variable"];
        for (let i: number = 1; i < parameters.length; i += 1) {
            newParameters.push(parameters[i].split("\n")[0]);
        }

        let output = this.context.convertParsed(newParameters);
        output.addSemicolon = false;

        // Languages like C# might need to pass a separate "\n{" through
        if (this.language.properties.style.separateBraceLines) {
            let lastParameter = parameters[parameters.length - 1];
            if (lastParameter.indexOf("\n") !== -1) {
                lastParameter = lastParameter.split("\n")[1];
                output.commandResults.push(new CommandResult(lastParameter, 1));
            }
        } else {
            output.commandResults[output.commandResults.length - 1].indentation += 1;
        }

        return output;
    }
}
