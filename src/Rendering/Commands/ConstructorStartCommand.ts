import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a constructor.
 */
export class ConstructorStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ConstructorStart)
        .withDescription("Starts a constructor")
        .withIndentation([1])
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the constructor.", true),
            new SingleParameter("className", "The name of the class.", true),
            new RepeatingParameters("Function parameters", [
                new SingleParameter("parameterName", "A named parameter for the constructor.", true),
                new SingleParameter("parameterType", "The type of the parameter.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ConstructorStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const imports: Import[] = [];
        let declaration = "";
        let output: CommandResult[];

        declaration += this.getPublicity(parameters[1]);

        if (this.language.syntax.classes.constructors.useKeyword) {
            declaration += this.language.syntax.classes.constructors.keyword;
        } else {
            declaration += parameters[2];
        }

        declaration += "(";

        if (this.language.syntax.classes.constructors.takeThis) {
            declaration += this.language.syntax.classes.this;

            if (parameters.length > 4) {
                declaration += ", ";
            }
        }

        if (parameters.length > 4) {
            const declarationLine = this.generateParameterVariable(parameters, 3);
            declaration += declarationLine.commandResults[0].text;
            imports.push(...declarationLine.addedImports);

            for (let i = 5; i < parameters.length; i += 2) {
                const nextDeclarationLine = this.generateParameterVariable(parameters, i);
                declaration += ", " + nextDeclarationLine.commandResults[0].text;
                imports.push(...nextDeclarationLine.addedImports);
            }
        }

        declaration += ")";

        output = [new CommandResult(declaration, 0)];
        this.addLineEnder(output, this.language.syntax.functions.defineStartRight, 1);

        return new LineResults(output).withImports(imports);
    }

    /**
     * Generates a line result for a parameter.
     *
     * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
     * @param i   An index in the parameters of a parameterName.
     * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
     */
    private generateParameterVariable(parameters: string[], i: number): LineResults {
        if (!this.language.syntax.variables.declarationRequired) {
            return LineResults.newSingleLine(parameters[i]);
        }

        const parameterName: string = parameters[i];
        const parameterTypeLine = this.context.convertParsed([CommandNames.Type, parameters[i + 1]]);
        const parameterType = parameterTypeLine.commandResults[0].text;

        return this.context.convertParsed([CommandNames.VariableInline, parameterName, parameterType]);
    }

    /**
     * Determines the name prefix for a constructor.
     *
     * @param publicity   Publicity of the constructor.
     * @returns Name prefix for the publicity.
     */
    private getPublicity(publicity: string): string {
        if (publicity === KeywordNames.Private) {
            return this.language.syntax.classes.constructors.private;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.syntax.classes.constructors.protected;
        }

        return this.language.syntax.classes.constructors.public;
    }
}
