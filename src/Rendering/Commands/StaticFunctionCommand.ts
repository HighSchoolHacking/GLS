import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { KeywordNames } from "./KeywordNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Calls a static function.
 */
export class StaticFunctionCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StaticFunction)
        .withDescription("Calls a static function")
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the function.", true),
            new SingleParameter("className", "The name of the class the function is on.", true),
            new SingleParameter("functionName", "The name of the function.", true),
            new RepeatingParameters("Function parameters", [
                new SingleParameter("parameterName", "A named parameter for the function.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StaticFunctionCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        const publicity: string = parameters[1];
        const className: string = parameters[2];
        const functionName: string = parameters[3];

        let output: string = className + ".";
        output += this.getPublicityPrefix(publicity);
        output += this.context.convertStringToCase(functionName, this.getPublicityCase(publicity));
        output += "(";

        if (parameters.length > 4) {
            output += parameters[4];

            for (let i = 5; i < parameters.length; i += 1) {
                output += ", ";
                output += parameters[i];
            }
        }

        output += ")";

        return LineResults.newSingleLine(output, true);
    }

    /**
     * Determines the case style for a static function.
     *
     * @param publicity   Publicity of the static function.
     * @returns Case style for the publicity.
     */
    private getPublicityCase(publicity: string): CaseStyle {
        if (publicity === KeywordNames.Private) {
            return this.language.properties.classes.statics.functions.privateCase;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.properties.classes.statics.functions.protectedCase;
        }

        return this.language.properties.classes.statics.functions.publicCase;
    }

    /**
     * Determines the name prefix for a static function.
     *
     * @param publicity   Publicity of the static function.
     * @returns Name prefix for the publicity.
     */
    private getPublicityPrefix(publicity: string): string {
        if (publicity === KeywordNames.Private) {
            return this.language.properties.classes.statics.functions.privatePrefix;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.properties.classes.statics.functions.protectedPrefix;
        }

        return this.language.properties.classes.statics.functions.publicPrefix;
    }
}
