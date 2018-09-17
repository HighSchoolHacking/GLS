import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { KeywordNames } from "./KeywordNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Retrieves a static variable.
 */
export class StaticVariableCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StaticVariable)
        .withDescription("Retrieves a static variable.")
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the static variable.", true),
            new SingleParameter("className", "The name of the class the function is on.", true),
            new SingleParameter("variableName", "The name of the static variable.", true),
        ]);

    /**
     * Metadata on the command.
     *
     * @returns Information on parameters this command takes in.
     */
    public getMetadata(): CommandMetadata {
        return StaticVariableCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const privacy: string = parameters[1];
        const className: string = parameters[2];
        let variableName: string = parameters[3];
        let variablePrefix: string;
        let casingStyle: CaseStyle;

        if (privacy === KeywordNames.Protected) {
            variablePrefix = this.language.syntax.classes.statics.variables.protectedPrefix;
            casingStyle = this.language.syntax.classes.statics.variables.protectedCase;
        } else if (privacy === KeywordNames.Private) {
            variablePrefix = this.language.syntax.classes.statics.variables.privatePrefix;
            casingStyle = this.language.syntax.classes.statics.variables.privateCase;
        } else {
            variablePrefix = this.language.syntax.classes.statics.variables.publicPrefix;
            casingStyle = this.language.syntax.classes.statics.variables.publicCase;
        }

        variableName = this.context.convertStringToCase(variableName, casingStyle);

        let output = "";
        output += className + ".";
        output += variablePrefix;
        output += variableName;

        return LineResults.newSingleLine(output, true);
    }
}
