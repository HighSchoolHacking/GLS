import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
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
            new SingleParameter("methodName", "The method name.", true),
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
            return LineResults.newSingleLine(line);
        }

        const typeLine = this.context.convertParsed([CommandNames.Type, parameters[2]]);
        const imports = typeLine.addedImports;

        const methodName = this.context.convertStringToCase(parameters[1], this.language.syntax.classes.members.functions.publicCase);

        if (this.language.syntax.interfaces.methodTypeAfter) {
            line += methodName;
            line += this.language.syntax.interfaces.declareMethodMiddle;

            for (let i = 3; i < parameters.length; i++) {
                if (i % 2 !== 0) {
                    line += parameters[i] + ": ";
                } else {
                    const nextTypeLine = this.context.convertParsed([CommandNames.Type, parameters[i]]);
                    line += nextTypeLine.commandResults[0].text;
                    imports.push(...nextTypeLine.addedImports);

                    if (i !== parameters.length - 1) {
                        line += ", ";
                    }
                }
            }

            line += this.language.syntax.interfaces.declareMethodRight + ": " + typeLine.commandResults[0].text;
        } else {
            line += this.language.syntax.interfaces.declareMethodLeft;
            line += typeLine.commandResults[0].text + " ";
            line += methodName + this.language.syntax.interfaces.declareMethodMiddle;

            for (let i = 3; i < parameters.length - 1; i += 2) {
                const nextTypeLine = this.context.convertParsed([CommandNames.Type, parameters[i + 1]]);
                line += nextTypeLine.commandResults[0].text + " " + parameters[i];
                if (i !== parameters.length - 2) {
                    line += ", ";
                }

                imports.push(...nextTypeLine.addedImports);
            }

            line += this.language.syntax.interfaces.declareMethodRight;
        }

        return LineResults.newSingleLine(line)
            .withAddSemicolon(true)
            .withImports(imports);
    }
}
