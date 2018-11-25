import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares an inline lambda type.
 */
export class LambdaTypeInlineCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.LambdaTypeInline)
        .withDescription("Declares an inline lambda type")
        .withParameters([
            new SingleParameter("returnType", "Return type of the lambda.", true),
            new RepeatingParameters("Lambda parameters", [
                new SingleParameter("parameterName", "Named parameter for the function.", true),
                new SingleParameter("parameterType", "The type of the parameter.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return LambdaTypeInlineCommand.metadata;
    }

    /**
     * Renders the lambda for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (!this.language.syntax.variables.explicitTypes) {
            return LineResults.newSingleLine("\0");
        }

        const imports: Import[] = [];
        const parameterCount = (parameters.length - 2) / 2;
        if (parameterCount > 2) {
            throw new Error("Inline type lambdas may not have more than two parameters.");
        }

        // (
        // Func<
        let output = this.language.syntax.lambdas.typeInline.leftByParameterCount[parameterCount];

        // (inputName1: TInput1, inputName2: TInput2
        // Func<Param1, Param2
        for (let i = 2; i < parameters.length; i += 2) {
            if (this.language.syntax.lambdas.typeInline.includeParameterNames) {
                const parameterInlineLine = this.context.convertParsed([CommandNames.VariableInline, parameters[i], parameters[i + 1]]);
                output += parameterInlineLine.commandResults[0].text;
                imports.push(...parameterInlineLine.addedImports);
            } else {
                const parameterTypeLine = this.context.convertParsed([CommandNames.Type, parameters[i + 1]]);
                output += parameterTypeLine.commandResults[0].text;
                imports.push(...parameterTypeLine.addedImports);
            }

            if (i !== parameters.length - 2) {
                output += ", ";
            }
        }

        if (parameterCount === 0) {
            // () =>
            // Func<
            output += this.language.syntax.lambdas.typeInline.middleWithoutParameters;
        } else {
            // (inputName1: TInput1, inputName2: TInput2) =>
            // Func<Param1, Param2,
            output += this.language.syntax.lambdas.typeInline.middleWithParameters;
        }

        // (inputName1: TInput1, inputName2: TInput2) => TReturn
        // Func<Param1, Param2, TReturn
        const returnTypeLine = this.context.convertParsed([CommandNames.Type, parameters[1]]);
        output += returnTypeLine.commandResults[0].text;
        imports.push(...returnTypeLine.addedImports);

        // (inputName1: TInput1, inputName2: TInput2) => TReturn
        // Func<Param1, Param2, TReturn>
        output += this.language.syntax.lambdas.typeInline.right;

        return LineResults.newSingleLine(output).withImports(imports);
    }
}
