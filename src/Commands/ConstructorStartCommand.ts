import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * A command for the beginning of a constructor.
 */
export class ConstructorStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.ConstructorStart,
        [1],
        [
            new SingleParameter("privacy", "The privacy of the constructor.", true),
            new SingleParameter("className", "The name of the class.", true),
            new RepeatingParameters(
                "Function parameters.",
                [
                    new SingleParameter("parameterName", "A named parameter for the constructor.", true),
                    new SingleParameter("parameterType", "The type of the parameter.", true)
                ])
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
        let declaration = "";
        let output: CommandResult[];

        declaration += this.getPublicity(parameters[1]);

        if (this.language.properties.classes.constructors.useKeyword) {
            declaration += this.language.properties.classes.constructors.keyword;
        } else {
            declaration += parameters[2];
        }

        declaration += "(";

        if (this.language.properties.classes.constructors.takeThis) {
            declaration += this.language.properties.classes.this;

            if (parameters.length > 4) {
                declaration += ", ";
            }
        }

        if (parameters.length > 4) {
            declaration += this.generateParameterVariable(parameters, 3);

            for (let i = 5; i < parameters.length; i += 2) {
                declaration += ", ";
                declaration += this.generateParameterVariable(parameters, i);
            }
        }

        declaration += ")";

        output = [new CommandResult(declaration, 0)];
        this.addLineEnder(output, this.language.properties.functions.defineStartRight, 1);

        return new LineResults(output, false);
    }

    /**
     * Generates a string for a parameter.
     *
     * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
     * @param i   An index in the parameters of a parameterName.
     * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
     */
    private generateParameterVariable(parameters: string[], i: number): string {
        if (!this.language.properties.variables.declarationRequired) {
            return parameters[i];
        }

        const parameterName: string = parameters[i];
        const parameterType: string = this.context.convertCommon("type", parameters[i + 1]);

        return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
    }

    /**
     * Determines the name prefix for a constructor.
     *
     * @param publicity   Publicity of the constructor.
     * @returns Name prefix for the publicity.
     */
    private getPublicity(publicity: string): string {
        if (publicity === "private") {
            return this.language.properties.classes.constructors.private;
        }

        if (publicity === "protected") {
            return this.language.properties.classes.constructors.protected;
        }

        return this.language.properties.classes.constructors.public;
    }
}
