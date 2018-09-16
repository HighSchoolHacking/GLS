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
 * Starts a member function.
 */
export class MemberFunctionCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MemberFunction)
        .withDescription("Starts a member function")
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the function.", true),
            new SingleParameter("name", "The name of the function.", true),
            new SingleParameter("returnType", "Return type of the member function", true),
            new RepeatingParameters("Function parameters", [
                new SingleParameter("parameterName", "A named parameter for the function.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MemberFunctionCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     */
    public render(parameters: string[]): LineResults {
        const publicity: string = parameters[1];
        const instanceName: string = parameters[2];
        const functionName: string = parameters[3];

        let output: string = instanceName + ".";
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
     * Determines the case style for a member function.
     *
     * @param publicity   Publicity of the member function.
     * @returns Case style for the publicity.
     */
    private getPublicityCase(publicity: string): CaseStyle {
        if (publicity === KeywordNames.Private) {
            return this.language.properties.classes.members.functions.privateCase;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.properties.classes.members.functions.protectedCase;
        }

        return this.language.properties.classes.members.functions.publicCase;
    }

    /**
     * Determines the name prefix for a member function.
     *
     * @param publicity   Publicity of the member function.
     * @returns Name prefix for the publicity.
     */
    private getPublicityPrefix(publicity: string): string {
        if (publicity === KeywordNames.Private) {
            return this.language.properties.classes.members.functions.privatePrefix;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.properties.classes.members.functions.protectedPrefix;
        }

        return this.language.properties.classes.members.functions.publicPrefix;
    }
}
