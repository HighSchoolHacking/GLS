import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a new lambda function.
 */
export class LambdaDeclareCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.LambdaDeclare)
        .withDescription("The body of a lambda function")
        .withParameters([
            new SingleParameter("returnType", "Return type of the lambda", true),
            new RepeatingParameters("Lambda function parameters", [
                new SingleParameter("parameterName", "A named parameter for the lambda function.", true),
                new SingleParameter("parameterType", "The type of the parameter.", true),
            ]),
            new SingleParameter("functionBody", "The actual body of the lambda function", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return LambdaDeclareCommand.metadata;
    }

    /**
     * Renders the lambda for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.syntax.lambdas.returnTypeRequired) {
            throw new Error("returnTypeRequired=true not implemented");
        }

        const imports: Import[] = [];
        let lambdaBody = "";

        lambdaBody += this.language.syntax.lambdas.functionLeft;

        if (parameters.length > 3) {
            const typeLine = this.generateParameterVariable(parameters, 2);
            lambdaBody += typeLine.commandResults[0].text;
            imports.push(...typeLine.addedImports);

            for (let i = 4; i < parameters.length - 1; i += 2) {
                const nextTypeLine = this.generateParameterVariable(parameters, i);
                lambdaBody += ", " + nextTypeLine.commandResults[0].text;
                imports.push(...nextTypeLine.addedImports);
            }
        }

        lambdaBody += this.language.syntax.lambdas.functionMiddle;

        if (parameters[1] === KeywordNames.Void) {
            lambdaBody += this.language.syntax.functions.defineStartRight + parameters[parameters.length - 1];
            lambdaBody += this.language.syntax.style.semicolon + " " + this.language.syntax.functions.defineEnd;
        } else {
            lambdaBody += parameters[parameters.length - 1];
        }

        lambdaBody += this.language.syntax.lambdas.functionRight;

        const output = [new CommandResult(lambdaBody, 0)];
        return new LineResults(output).withImports(imports);
    }

    /**
     * Generates line results for a parameter.
     *
     * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
     * @param i   An index in the parameters of a parameterName.
     * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
     */
    private generateParameterVariable(parameters: string[], i: number): LineResults {
        if (!this.language.syntax.lambdas.parameterTypeRequired) {
            return LineResults.newSingleLine(parameters[i]);
        }

        const parameterName: string = parameters[i];
        const parameterTypeLine = this.context.convertParsed([CommandNames.Type, parameters[i + 1]]);
        const parameterType = parameterTypeLine.commandResults[0].text;

        return this.context
            .convertParsed([CommandNames.VariableInline, parameterName, parameterType])
            .withImports(parameterTypeLine.addedImports);
    }
}
