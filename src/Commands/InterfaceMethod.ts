import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for declaring methods within an interface.
 */
export class InterfaceMethodCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("InterfaceName", "The Interface name.", true),
        new RepeatingParameters(
            "Method arguments.",
            [
                new SingleParameter(
                    "argumentName",
                    "Name of argument.",
                    true),
                new SingleParameter(
                    "argumentType",
                    "Type of argument.",
                    true)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return InterfaceMethodCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line = "";

        if (!this.language.properties.variables.explicitTypes) {
            line += parameters[1];
            line += this.language.properties.interfaces.declareMethodMiddle;
            for (let i = 3; i < parameters.length; i += 2) {
                line += parameters[i];
            }
        }

        if (this.language.properties.interfaces.methodTypeAfter) {
            line += parameters[1];
            line += this.language.properties.interfaces.declareMethodMiddle;

            for (let i = 3; i < parameters.length; i++) {
                if (i % 2 !== 0) {
                    line += parameters[i] + ": ";
                } else if (i !== parameters.length - 1) {
                    line += parameters[i] + ", ";
                } else {
                    line += parameters[i];
                }
            }

            line += this.language.properties.interfaces.declareMethodRight + ": " + parameters[2];
        } else {
            line += this.language.properties.interfaces.declareMethodLeft;
            line += parameters[2] + " " + parameters[1] + this.language.properties.interfaces.declareMethodMiddle;

            for (let i = 3; i < parameters.length - 1; i += 2) {
                line += parameters[i + 1] + " " + parameters[i];
                if (i !== parameters.length - 2) {
                    line += ", ";
                }
            }

            line += this.language.properties.interfaces.declareMethodRight;
        }

        return LineResults.newSingleLine(line, true);
    }
}
