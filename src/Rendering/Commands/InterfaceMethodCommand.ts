import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a method within an interface.
 */
export class InterfaceMethodCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.InterfaceMethod)
        .withDescription("Declares a method within an interface")
        .withParameters([
            new SingleParameter("MethodName", "The method name.", true),
            new SingleParameter("returnType", "Return type of the method", true),
            new RepeatingParameters("Method arguments", [
                new SingleParameter("argumentName", "Name of argument.", true),
                new SingleParameter("argumentType", "Type of argument.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return InterfaceMethodCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line = "";

        if (!this.language.syntax.interfaces.supported) {
            return LineResults.newSingleLine(line, false);
        }

        if (this.language.syntax.interfaces.methodTypeAfter) {
            line += parameters[1];
            line += this.language.syntax.interfaces.declareMethodMiddle;

            for (let i = 3; i < parameters.length; i++) {
                if (i % 2 !== 0) {
                    line += parameters[i] + ": ";
                } else if (i !== parameters.length - 1) {
                    line += parameters[i] + ", ";
                } else {
                    line += parameters[i];
                }
            }

            line += this.language.syntax.interfaces.declareMethodRight + ": " + parameters[2];
        } else {
            line += this.language.syntax.interfaces.declareMethodLeft;
            line += parameters[2] + " " + parameters[1] + this.language.syntax.interfaces.declareMethodMiddle;

            for (let i = 3; i < parameters.length - 1; i += 2) {
                line += parameters[i + 1] + " " + parameters[i];
                if (i !== parameters.length - 2) {
                    line += ", ";
                }
            }

            line += this.language.syntax.interfaces.declareMethodRight;
        }

        return LineResults.newSingleLine(line, true);
    }
}
